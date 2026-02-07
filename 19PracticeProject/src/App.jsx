import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

function App({darkMode}) {
  const [pads, setPads] = React.useState(padsData)

  const buttonDataEl = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color}/>
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
