'use client'

import { todoType } from '@/types/todo-type'
import { ChangeEvent, FC, useState } from 'react'

import { Button } from './ui/button'

interface Props {
  todo: todoType
  changeTodoText: (id: number, text: string) => void
  toggleIsTodoDone: (id: number, done: boolean) => void
  deleteTodoItem: (id: number) => void
}

const Todo: FC<Props> = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem
}) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false)

  // State for handling text input
  const [text, setText] = useState(todo.text)

  // State for handling "done" status
  const [isDone, setIsDone] = useState(todo.done)

  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone)
    setIsDone(prev => !prev)
  }

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true)
  }

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todo.id, text)
    setEditing(false)
  }

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false)
    setText(todo.text)
  }

  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this todo?')) {
      deleteTodoItem(todo.id)
    }
  }

  // Rendering the Todo component
  return (
    <div className='flex items-center gap-2 rounded-full border border-solid border-gray-200 p-4'>
      {/* Checkbox for marking the todo as done */}
      <input
        type='checkbox'
        className='-sm h-4 w-4 text-blue-200'
        checked={isDone}
        onChange={handleIsDone}
      />
      {/* Input field for todo text */}
      <input
        type='text'
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`${
          todo.done ? 'line-through' : ''
        } w-full border-gray-200 px-2 py-1 outline-none read-only:border-transparent focus:border`}
      />
      {/* Action buttons for editing, saving, canceling, and deleting */}
      <div className='ml-auto flex gap-1'>
        {editing ? (
          <Button onClick={handleSave} className='w-14 px-2 py-1'>
            Save
          </Button>
        ) : (
          <Button
            variant='secondary'
            onClick={handleEdit}
            className='w-14 px-2 py-1'
          >
            Edit
          </Button>
        )}
        {editing ? (
          <Button
            onClick={handleCancel}
            variant='destructive'
            className='w-16 px-2 py-1'
          >
            Close
          </Button>
        ) : (
          <Button
            variant='destructive'
            onClick={handleDelete}
            className='w-16 px-2 py-1'
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  )
}

export default Todo
