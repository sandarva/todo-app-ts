export enum TaskStatus {
    completed = "completed",
    incomplete = "incomplete"
}

export type Todo = {
    id: number
    title: string
    status: TaskStatus
    description: string
}