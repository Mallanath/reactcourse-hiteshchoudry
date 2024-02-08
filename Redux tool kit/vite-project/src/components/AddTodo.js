import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

//*now we have to create method but we dont create metod to update 
//*but you create method so that you can collect information wrap it up and send it to the handler,which is going to be addTodo
    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}
    className='space-x-3 mt-12'>
      <input type="text"
      className='bg-gray-300 rounded border border-gray-700 focus:border-indigo-700
      focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3
      leading-8 transition-colors duration-200 ease-in-out '
      placeholder='Enter a Todo...'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button
      type='submit'
      className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
      >Add Todo</button>
    </form>
  )
}

export default AddTodo