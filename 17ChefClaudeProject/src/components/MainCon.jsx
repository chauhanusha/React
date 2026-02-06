import React from "react"
export default function MainCon(){
    const [ingredientArr, setIngredients] = React.useState([])

    //mapping over ingredent array
    const ingredientItems = ingredientArr.map((items) => {
        return (
            <li key={items}>{items}</li>
        )
    })

    function addIngredient(formData){
        // event.preventDefault()   //preventing our page from refreshing again and again
        // console.log("form is submitted")
        // const formData = new FormData(event.currentTarget)   //we are accessing the form data through dom
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
            <form action={addIngredient} className="ingredient-form">
                <input 
                aria-label="Add ingredient" type="text" placeholder="e.g oregano" name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            {ingredientArr.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
            </main>
    )
}