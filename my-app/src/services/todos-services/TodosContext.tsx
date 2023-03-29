import {
  createContext,
  useState,
  ReactElement,
  useContext,
} from 'react'
import { TodoItemI } from './todoTypes'
import { testTodoItems } from './todoTests'

const TodosContext = createContext<TodoItemI[]>([])
const AddTodoContext = createContext((todo: TodoItemI): void => {})

export const useTodos = () => {
  return useContext(TodosContext)
}

export const useAddTodo = () =>{
  return useContext(AddTodoContext)
}

export function TodosProvider({
  children,
}: {
  children: ReactElement
}) {
  const [todos, setTodos] = useState<TodoItemI[]>(testTodoItems)

  const addTodo = (todo: TodoItemI) => {
    console.log('addTodo')
    setTodos((a: TodoItemI[]) => {
      return [todo, ...a]
    })
  }

  return (
    <TodosContext.Provider value={todos}>
      <AddTodoContext.Provider value={addTodo}>
        {children}
      </AddTodoContext.Provider>
    </TodosContext.Provider>
  )
}
