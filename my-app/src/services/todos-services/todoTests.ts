import { TodoItemI } from './todoTypes'

const testTodoItem1: TodoItemI = {
  completed: false,
  title: 'test todo item 1',
  description: 'test item',
  dateCreated: 1679504617274,
  dateCompleted: 1679504617274,
}

const testTodoItem2: TodoItemI = {
  completed: false,
  title: 'test todo item 2',
  description: 'test item 2',
  dateCreated: 1679504617274,
  dateCompleted: 1679504617274,
}

const testTodoItems: TodoItemI[] = [testTodoItem1, testTodoItem2]

export { testTodoItems }
