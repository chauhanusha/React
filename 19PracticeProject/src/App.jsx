import React from "react"
import padsData from "./pads"

function App({darkMode}) {
  const [pads, setPads] = React.useState(padsData)

  const styles = {
    backgroundColor : darkMode ? "#222222" : "#cccccc"
  }

  const buttonDataEl = pads.map((pad) => (
    <button style={styles} key={pad.id}></button>
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
