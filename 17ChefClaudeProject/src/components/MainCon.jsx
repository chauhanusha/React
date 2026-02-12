import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function MainCon(){
    const [ingredientArr, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    //mapping over ingredent array

    function handleClick(){
        setRecipeShown(preVal => preVal=true)
    }
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
            {ingredientArr.length > 0 && <IngredientsList 
             ingredientArr = {ingredientArr} toggle={handleClick}/>}
             
             {recipeShown && <ClaudeRecipe />}
            </main>
    )
}