import React from "react"
export default function MainCon(){
    const [ingredientArr, setIngredients] = React.useState([])

    //mapping over ingredent array
    const ingredientItems = ingredientArr.map((items) => {
        return (
            <li key={items}>{items}</li>
        )
    })

    function handleSubmit(event){
        event.preventDefault()   //preventing our page from refreshing again and again
        console.log("form is submitted")
        const formData = new FormData(event.currentTarget)   //we are accessing the form data through dom
        const newIngredient = formData.get("ingredient")   //getting the data that is entered in form
        // console.log(newIngredient)
        // ingredientArr.push(newIngredient)
        // console.log(ingredientArr)

        //using states=> updating page
        setIngredients(prevIngre => [
            ...prevIngre, newIngredient
        ])
    }
    return (
        <main>
            <form onSubmit={handleSubmit} className="ingredient-form">
                <input 
                aria-label="Add ingredient" type="text" placeholder="e.g oregano" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientItems}
            </ul>
            </main>
    )
}