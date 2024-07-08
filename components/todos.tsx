'use client'

import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo
} from '@/actions/todo-actions'
import { addUser } from '@/actions/user-actions'
import { todoType } from '@/types/todo-type'
import { FC, useState } from 'react'

import AddTodo from './add-todo'
import Todo from './todo'

interface Props {
  todos: todoType[]
  user: any
}

const Todos: FC<Props> = ({ todos, user }) => {
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState<todoType[]>(todos)

  // Function to create a new todo item
  const createTodo = (text: string) => {
    // addUser()
    const id = new Date().getTime()
    addTodo(text, id, user?.id)
    setTodoItems(prev => [
      ...prev,
      { id: id, text, done: false, userId: user?.id }
    ])
  }

  // Function to change the text of a todo item
  const changeTodoText = (id: number, text: string) => {
    setTodoItems(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, text } : todo))
    )
    editTodo(id, text)
  }

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = (id: number, done: boolean) => {
    setTodoItems(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    )
    toggleTodo(id, done)
  }

  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    setTodoItems(prev => prev.filter(todo => todo.id !== id))
    deleteTodo(id)
  }

  // Rendering the Todo List component
  return (
    <main className='mx-auto flex min-h-screen w-full max-w-xl flex-col items-center p-16'>
      <div className='text-5xl font-medium'>Your Garden</div>
      <div className='mt-8 flex w-full flex-col gap-2'>
        {todoItems.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
      <AddTodo createTodo={createTodo} />
    </main>
  )
}

export default Todos
