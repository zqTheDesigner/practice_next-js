import TodoItem from './todo-item'
import Link from 'next/link'

const TodoList = () => {
  return (
    <>
      <Link href='/'>Home</Link>
      <TodoItem />
    </>
  )
}

export default TodoList
