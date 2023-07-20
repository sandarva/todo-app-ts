import { list, form } from "./index";
import { TaskStatus, Todo } from "./types";

const todoArr: Todo[] = []

/**
 * 
 * Adds the todo by appending in the element
 * 
 * @param todo - the todo type the user adds
 * 
 */
export function addTodo(todo: Todo) {
    console.log(todo);

    const todoView = `
        <li class="todo__item">
            <div class="todo__content" data-id=${todo.id}>
                <h3 class="todo__title">${todo.title}</h3>
                <button class="complete">Done</button>
            </div>
            <div class="todo__description">
                ${todo.description}
            </div>
        </li>
    `
    list?.insertAdjacentHTML('beforeend', todoView)
    todoArr.push(todo);
    form?.reset()
}

export function toggelDone(id: number) {
    const selected = todoArr.filter((todo) => {
        return todo.id === id
    })

    if (selected[0].status === TaskStatus.completed) {
        selected[0].status = TaskStatus.incomplete
    } else {
        selected[0].status = TaskStatus.completed
    }
}

/**
 * 
 * @returns a random number greater than 10000000
 */
export function getId(): number {
    return (Math.floor(Math.random() * 10000000));
}