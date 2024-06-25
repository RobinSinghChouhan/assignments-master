import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
    <h1>Hello World</h1>
      <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
      <Todo todos={todos}></Todo>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </>
  )
}

export default App
