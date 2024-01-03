import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive')

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor : color}} >
       <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-2 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'green'}}
          >Green</button>
          <button
          onClick={() => setColor('purple')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'purple'}}
          >Purple</button>
          <button
          onClick={() => setColor('Yellow')}
          className='outline outline-yellow-500 px-4 py-1 rounded-lg text-black shadow-xl'
          style={{backgroundColor: 'yellow'}}
          >Yellow</button>
          <button
          onClick={() => setColor('pink')}
          className='outline outline-pink-500 px-4 py-1 rounded-lg text-black shadow-xl'
          style={{backgroundColor: 'pink'}}
          >Pink</button>
          <button
          onClick={() => setColor('grey')}
          className='outline outline-grey-500 px-4 py-1 rounded-lg text-black shadow-xl'
          style={{backgroundColor: 'grey'}}
          >Grey</button>
          
        </div>
       </div>
    </div>
  )
}

export default App
