import React from "react"
import padsData from "./pads"
function App() {
  const [pads, setPads] = React.useState(padsData)
  const buttonDataEl = pads.map((pad) => (
    <button></button>
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
