import React  from "react";

export default function StarWar(){
    const [starWarData, setStarWarData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    
       React.useEffect(function(){
         console.log("Effect ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarData(data))
       }, [count])
     
    console.log("Rendered!")

    function handleClick(){
        setCount(prevCount => prevCount + 1)
    }
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={handleClick}>Add</button>
            <pre>{JSON.stringify(starWarData, null, 2)}</pre>
        </div>
    )
}