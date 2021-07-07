import { ITodo } from './../types/todo'
import Todo from './../models/todo'

interface TodoRepo {
    getTodos(): Promise<Array<ITodo>>
    addTodo(todoBody: ITodo): Promise<ITodo>
    updateTodo(id: string, todoBody: ITodo): Promise<ITodo | null>
    deleteTodo(id: string): Promise<ITodo | null>
}

class TodoRepoImpl implements TodoRepo {
    private constructor() { }

    static of(): TodoRepoImpl {
        return new TodoRepoImpl()
    }

    async getTodos(): Promise<Array<ITodo>> {
        // TODO: Should get Todo from mongoDB
    }

    async addTodo(todoBody: ITodo): Promise<ITodo> {
        return Todo.create(todoBody)
    }

    async updateTodo(id: string, todoBody: ITodo): Promise<ITodo | null> {
        // TODO: Should update Todo to mongoDB
    }

    async deleteTodo(id: string): Promise<ITodo | null> {
        // TODO: Should delete Todo from mongoDB
    }

}

export { TodoRepoImpl }
