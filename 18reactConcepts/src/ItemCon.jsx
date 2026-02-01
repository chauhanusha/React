import React from "react";

export default function ItemCon(){
    const [myFav, setMyFav] = React.useState([])

    const allFav = ["usha", "nisha", "sannu"]
    const thingElement = myFav.map(thing =>
        <p key={thing}>{thing}</p>
    )

    function addFavThing(){
        setMyFav(
            prevFav => [
                ...prevFav,
                allFav[prevFav.length]
            ]
        )
    }

    return(
        <main>
            <button onClick={addFavThing}>Add items</button>
            <section>{thingElement}</section>
        </main>
    )
}