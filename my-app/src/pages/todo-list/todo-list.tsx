import TodoItem from './todo-item'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { testTodoItems } from '../../services/todos-services/todoTests'

const Test = () => {
  return (
    <>
      <h1>Test</h1>
    </>
  )
}

const TodoList = () => {
  return (
    <>
      <Link href='/'>Home</Link>
      {testTodoItems.map((todoItem, idx) => {
        return <TodoItem title={todoItem.title} key={idx} />
      })}
      <Test />
      <Button
        variant='outlined'
        onClick={() => {
          console.log('test')
        }}
      >
        Add Todo
      </Button>
    </>
  )
}

export default TodoList
