import TodoItem from './TodoItem'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import {
  useTodos,
  useAddTodo,
} from '@/services/todos-services/TodosContext'
import { testTodoItem1 } from '@/services/todos-services/todoTests'
import { useState } from 'react'

const Test = () => {
  return (
    <>
      <h1>Test</h1>
    </>
  )
}

const TodoList = () => {
  const todos = useTodos()
  const addTodo = useAddTodo()

  const [newTodo, setNewTodo] = useState('')

  return (
    <>
      <Link href='/' className='underline hover:text-blue-600'>
        Home
      </Link>

      {todos.map((todoItem, idx) => {
        return <TodoItem title={todoItem.title} key={idx} />
      })}
      <Test />
      {/* {newTodo} */}
      <Input
        value={newTodo}
        onChange={(evt) => setNewTodo(() => evt.target.value)}
      />
      <Button
        variant='outlined'
        onClick={() => {
          addTodo({
            completed: false,
            title: newTodo,
            description: 'test item 2',
            dateCreated: 1679504617274,
            dateCompleted: 1679504617274,
          })
          setNewTodo(() => '')
        }}
      >
        Add Todo
      </Button>
      <Button onClick={() => addTodo(testTodoItem1)}>
        Set Test Todos
      </Button>
    </>
  )
}

export default TodoList
