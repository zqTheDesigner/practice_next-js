import TodoList from './todo-lists/TodoList'
import {
  TodosProvider,
  useAddTodo,
} from '@/services/todos-services/TodosContext'

const TodosPage = () => {
  return (
    <>
      <main className='h-screen'>
        <TodosProvider>
          <>
            <TodoList />
  
          </>
        </TodosProvider>
      </main>
    </>
  )
}

export default TodosPage
