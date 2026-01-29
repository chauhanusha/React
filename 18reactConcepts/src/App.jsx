import React from "react"
export default function App(){

  //understanding state
  let [isImportant, setIsImportant] = React.useState("hello")

  function handleClick(){
    setIsImportant("hello world")
  }

  //event understanding
  function handleOver(){
    console.log("hover over button")
  }

  return (
    <div>
      <h1>understanding states</h1>
      <button onClick={handleClick}>{isImportant}</button>
    </div>
  )
}