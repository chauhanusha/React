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

    //creating a side effect using useEffect
       React.useEffect(()=>{
        console.log("effect function ran")
       }, [])  //using [] as this function doesn't depend on count variable

    function handleClick(){
        setCount(prevCount => prevCount + 1)
    }
    function handleChange(){
        console.log("changed")
    }

    // function handleHover(){
    //     console.log("hovering over a button")
    // }
    //important 
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={handleClick}>Add</button>
            <button onChange={handleChange}></button>
            <pre>{JSON.stringify(starWarData, null, 2)}</pre>
        </div>
    )
}