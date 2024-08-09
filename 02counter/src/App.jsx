import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
  //we are using react hook for state manipulation
  let [counter, setCounter] = useState(15)

  //add function
  const addValue = () =>{
    if(counter >= 20){
      setCounter(20)
    }
    else{
    setCounter(counter + 1)
    }
    // console.log("value add", counter)
  }

  //remove function
  const removeValue = () =>{
    if(counter <= 0){
      setCounter(0)
    }else{
    setCounter(counter - 1)
    }
  }
  

  return (
    <>
     <h1>React Project</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addValue}>Add value</button>
     <br />
     <button
     onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
