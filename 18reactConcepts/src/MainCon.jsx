import React from "react"

export default function MainCon(){
    let [count, setCount] = React.useState(0)

    function handleAddClick(){
        setCount(function(prevCount){
            return prevCount + 1;
        })
    }

    function handleDeleteClick(){
        setCount(prevCount=> prevCount - 1)  //using arrow function
    }

    return (
        <main className="container"> 
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={handleDeleteClick} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={handleAddClick} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}