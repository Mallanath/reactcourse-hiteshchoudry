import { useState } from 'react'
import './App.css'

function App() {
 const [counter, setCounter] = useState(15)
  // let counter = 15
  
  const addValue = () => {
    //  counter = counter + 1
    // console.log(counter);

    // setCounter(counter + 1)
    
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>React course with hitesh {counter} </h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue} >Add Value</button>
      <button onClick={removeValue}>remove value </button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
