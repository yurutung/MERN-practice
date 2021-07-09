import { FastifyInstance } from 'fastify'
import { startFastify } from '../server'
import { Server, IncomingMessage, ServerResponse } from 'http'
import * as dbHandler from './db'
import * as E from 'fp-ts/Either'
import { ITodo } from '../types/todo'
import { constTrue } from 'fp-ts/lib/function'
import { TodoRepoImpl } from './../repo/todo-repo'

describe('Form test', () => {
    let server: FastifyInstance<Server, IncomingMessage, ServerResponse>

    beforeAll(async () => {
        await dbHandler.connect()
        server = startFastify(8888)
    })

    afterEach(async () => {
        await dbHandler.clearDatabase()
    })

    afterAll(async () => {
        E.match(
            (e) => console.log(e),
            (_) => console.log('Closing Fastify server is done!')
        )(
            E.tryCatch(
                () => {
                    dbHandler.closeDatabase()
                    server.close((): void => { })
                },
                (reason) => new Error(`Failed to close a Fastify server, reason: ${reason}`)
            )
        )
    })    

    // TODO: Add some test cases like CRUD, i.e. get, post, update, delete
    it('should successfully post a Todo to mongodb and can be found', async () => {
        const newTodo = {
            name: 'clean my desk',
            description: 'Should clean my desk before the remote meeting at 15:00.',
            status: false
        }
        const response = await server.inject({
            method: 'POST',
            url: '/api/todos',
            payload: newTodo
        })
    
        expect(response.statusCode).toBe(201)
        const res: { todo: ITodo } = JSON.parse(response.body)
        console.log(`post Todo: ${response.body}`)
        expect(res.todo.name).toBe(newTodo.name)
        expect(res.todo.description).toBe(newTodo.description)
        expect(res.todo.status).toBe(newTodo.status)
    
        // test if add successfully with get
        const getResponse = await server.inject({ method: 'GET', url: '/api/todos' })
        expect(getResponse.statusCode).toBe(200)
        const res2: { todos: Array<ITodo> } = JSON.parse(getResponse.body)
        console.log(`get Todos: ${getResponse.body}`)
        expect(res2.todos.length).toBe(1)
        expect(res2.todos[0].name).toBe(newTodo.name)
        expect(res2.todos[0].description).toBe(newTodo.description)
        expect(res2.todos[0].status).toBe(newTodo.status)

        const updateTodo = {
            name: 'clean my desk',
            description: 'Should clean my desk before the remote meeting at 15:00.',
            status: true
        } as ITodo
        
        const id = res2.todos[0]._id
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        // const todoRepo = TodoRepoImpl.of()
        // const todo: ITodo | null = await todoRepo.updateTodo(id, updateTodo)
        // console.log('todotodotodotodotodo')
        // console.log(todo)
        // test if update successfully with put
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
        const getResponse_put = await server.inject({ 
            method: 'PUT', 
            url: `/api/todos/${id}`, 
            payload: updateTodo
        })
        expect(getResponse.statusCode).toBe(200)
        const res_update: { todo: ITodo } = JSON.parse(getResponse_put.body)
        console.log(`put Todos: ${getResponse_put.body}`)
        expect(res_update.todo.status).toBe(true)
    })

    
})
