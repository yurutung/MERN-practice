import axios, { AxiosResponse } from 'axios'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {
// TODO: Should call GET endpoint
}

const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    try {
        const newTodo = {
            ...todoBody,
            status: false
        }
        const todo = await axios.post('/api/todos', newTodo)
        return todo
    } catch (error) {
        console.error(`POST /api/todos ERROR: ${error}`)
        throw new Error(error)
    }
}

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
// TODO: Should call PUT endpoint
}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {
// TODO: Should call DELETE endpoint
}

export { getTodos, addTodo, updateTodo, deleteTodo }
