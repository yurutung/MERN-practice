import axios, { AxiosResponse } from 'axios'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {
// TODO: Should call GET endpoint
}

// TODO: Should call POST endpoint

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
// TODO: Should call PUT endpoint
}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {
// TODO: Should call DELETE endpoint
}

export { getTodos, addTodo, updateTodo, deleteTodo }
