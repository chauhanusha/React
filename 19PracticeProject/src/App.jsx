import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

function App() {
  const [pads, setPads] = React.useState(padsData)

  function toggle(){
    console.log("clicked")
  }

  const buttonDataEl = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on}
    toggle={toggle}/>
  ))

  return (
    <main>
         <div className="pad-container">
                {buttonDataEl}
            </div>
    </main>
  )
}

export default App
