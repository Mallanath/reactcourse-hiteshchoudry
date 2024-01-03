
import './App.css'
import Card from './components/card'


function App() {
  let myObj = {
    name: "mallanath",
    age: 20,
    address: {
      city: "hyderabad",
      state: "Telangana",
      country: "India"
    }
  }

  let newArr=[1,2,3,4,56,6]

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md  '>vite with tailwind</h1>
     <Card username="mallanath" myArr={newArr} />
     <Card username='hitesh'/>
     <Card username='Json' post='Staff Engg.'/>
    </>
  )
}

export default App
