import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  //* Since we have exact same data addTodo in below function and in create context in this Todoprovider
  //*Since we have exact same data that data will automatically map to method
  //*in the context we just created the method we just created the blueprint of it but not the defination
  //*here we are going to write the defination
//* the ...todo part of the code expands the todo object that means its properties will spread into new array element
  //*teh ...prev part of code combines the expanded todo object with previous object

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now() , ...todo} , ...prev])
  }

//! by mapping through eachtodo if prevTodo.id of is = to id of todo which is provided by  funtion to me
//! if it is ? then i will update the entire object to or else : i will keep it as it is
//! prevTodo.id === todo.id : this is a condition checking if current element (prevTodo) is === to id of next elemenet(todo)
//! the map method does not excute func for empty element and not create new array
//!it return new array  as result of callback func in callback func it is returning either updatedElement(todo.id) or current element(prevTodo.id) 
  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevTodo) => (prevTodo.id === 
        todo.id ? todo : prevTodo
        ))
    })
  }

//? go throgh or loop through each one of todo and create a new array based on the true condition 
//?the condition  the id should not match. whose id is matching we need to remove 

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => {
      prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: 
        !prevTodo.completed} : prevTodo)
    })
  }

//* as soon as the component loads Query the localStorage get me all The data and 
//* push the data in to the state which is setTodos
//*we use this useEffect only one time to get the data we dont give dependecy array to it if give it will run again so and after that we use 
//*another useEffect hook to get the data setdata or updata from localstorage
  useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"))
     if(todos && todos.length > 0){
      setTodos(todos)
     }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <h1 className='text-3xl font-bold underline'>Hello world</h1>
    </TodoProvider>
  )
}

export default App
