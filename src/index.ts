import { Todo, TaskStatus } from "./types";
import { addTodo, getId, toggelDone } from './functions';

export const form = document.querySelector<HTMLFormElement>('#todo__form')
export const list = document.querySelector<HTMLUListElement>('#todos__list')
const titleInput = document.querySelector<HTMLInputElement>('#title')
const descriptionInput = document.querySelector<HTMLTextAreaElement>('#desc')
const doneBtn = document.querySelector<HTMLButtonElement>('.complete')

form?.addEventListener("submit", (event) => {
    event.preventDefault()

    if (titleInput?.value === "" || titleInput?.value == null) return

    const newTodo: Todo = {
        id: getId(),
        title: titleInput?.value.trim(),
        status: TaskStatus.incomplete,
        description: descriptionInput?.value.trim() || ''
    }
    addTodo(newTodo)
})

list?.addEventListener("click", (event) => {
    if ((event.target instanceof HTMLElement)) {
        if (event.target.tagName === "BUTTON") {
            const todoId = Number((event.target.parentNode as HTMLElement)?.dataset.id)
            toggelDone(todoId)
            const parentNode = event?.target.parentNode as HTMLElement

            if (parentNode.firstChild?.nextSibling instanceof HTMLElement) {
                parentNode.firstChild.nextSibling?.classList.toggle('completed')
            }
        }
    }
})