import { React, useEffect, useState } from 'react'
import './App.css'
import HookExample from './components/hook-example'


const App = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [toggle, setToggle] = useState(true)
  
  return (
    <div>
      <div>
        <h2 >Rishi Rana</h2>
        <p>You Clicked {count} times</p>
        <button type="button" onClick={() => setCount(count + 1)}>Click Me</button>
      </div>

      <div>
        <input type="text" placeholder='Type Something..........'
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
       />
        <h3>Rishi Rana</h3>
        <p>You typed: <strong>{inputValue}</strong> </p>
      </div>

     {toggle && <HookExample/>}
     <button type="button" onClick={()=> setToggle(!toggle)}>Toggle</button>

    </div>
  )
}

export default App;




