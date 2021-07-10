import React, { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import { getTodos, addTodo, updateTodo, deleteTodo } from './API'
import './App.css'

const App = () => {
  // useState(起始值)
  // 宣告叫 todos 的 state 變數，起始值為 []
  // React 在 re-render 間會記住目前的值，並將它提供給 function。
  // 如果我們需要更新目前的 todos，我們可以呼叫 setTodos。
  const [todos, setTodos] = useState<ITodo[]>([])

  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // componentDidMount
    // 告訴 React 你的 component 需要在 render 後做一些事情。
    fetchTodos()
  }, [])

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.error(err))
  }

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault()
    addTodo(formData)
      .then(_ => fetchTodos())
      .catch(err => console.error(err))
  }

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(_ => fetchTodos())
      .catch(err => console.error(err))
  }

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(() => fetchTodos())
      .catch(err => console.log(err))
  }

  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {
        todos.map((todo: ITodo) => (
          <TodoItem
            key={todo._id}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            todo={todo}
          />
        ))
      }
    </main>
  )
}

export default App
