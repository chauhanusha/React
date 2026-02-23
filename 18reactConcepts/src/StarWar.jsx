import React  from "react";

export default function StarWar(){
    const [starWarData, setStarWarData] = React.useState(null);

    
        //console.log("Effect ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            //.then(data => setStarWarData(data))
     
    console.log("Rendered!")
    
    return (
        <div>
            <pre>{JSON.stringify(starWarData, null, 2)}</pre>
        </div>
    )
}