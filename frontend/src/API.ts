import axios, { AxiosResponse } from 'axios'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {

}

const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {

}

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {

}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {

}

export { getTodos, addTodo, updateTodo, deleteTodo }
