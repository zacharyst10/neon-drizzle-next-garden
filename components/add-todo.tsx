'use client'

import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'

import { Button } from './ui/button'

interface Props {
  createTodo: (value: string) => void
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState('')

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo(input)
    setInput('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  // Rendering the AddTodo component
  return (
    <div className='mt-2 flex w-full gap-1'>
      {/* Input field for entering new todo text */}
      <input
        type='text'
        className='w-full rounded-full border border-gray-200 px-2 py-1 outline-none'
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        value={input}
      />
      {/* Button for adding a new todo */}
      <Button
        className='flex h-9 w-14 items-center justify-center px-2 py-1'
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  )
}

export default AddTodo
