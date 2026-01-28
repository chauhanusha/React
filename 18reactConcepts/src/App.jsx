export default function App(){
  function handleClick(){
    console.log("i am clicked")
  }

  function handleOver(){
    console.log("hover over button")
  }

  return (
    <div>
      <button onMouseOver={handleOver}>click me!</button>
    </div>
  )
}