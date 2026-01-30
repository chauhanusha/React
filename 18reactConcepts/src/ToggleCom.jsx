import React from "react"

export default function ToggleCom(){
    const [isGoingOut, setIsGoingOut] = React.useState(false)

    function changeMind(){
        setIsGoingOut(prev => !prev)

    }

    return(
        <main>
            <h1>this is a toggle button</h1>
            <button onClick={changeMind}>{isGoingOut ? "yes" : "no"}</button>
        </main>
    )
}