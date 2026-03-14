import React from "react"

export default function ToggleCom(){
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    const [isValid, setIsValid] = React.useState(18)

    function changeMind(){
        setIsGoingOut(prev => !prev)
    }

    function handleClick(){
        setIsValid(prev => {
            if(prev <= 18) console.log("valid")
                else console.log("not valid")
        })
    }

    return(
        <main>
            <h1>this is a toggle button</h1>
            <button onClick={changeMind}>{isGoingOut ? "yes" : "no"}</button>
            <button onClick={handleClick}>Check</button>
        </main>
    )
}