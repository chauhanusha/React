import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

function App() {
  const [pads, setPads] = React.useState(padsData)

  function toggle(id){
    setPads(prevPads => prevPads.map(item => {
      return item.id === id ? {...item, on: !item.on} : item
    }))
  }

  const buttonDataEl = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on}
    toggle={toggle} id={pad.id}/>
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
