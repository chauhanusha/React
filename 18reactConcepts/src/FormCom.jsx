import ReactDom from 'react-dom/client'

export default function FormCom() {

    function signUp(formData) {
        // event.preventDefault()
        // const formEl = event.currentTarget
        // const formData = new FormData(formEl)
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const employmentStatus = formData.get("employmentStatus")
        // //formEl.reset()
        // console.log(email)
        // console.log(password)
        // console.log(employmentStatus)

        const data = Object.fromEntries(formData)  //will return an object all entries of form input
        const dietaryrestriction = formData.getAll("dietaryrestriction") //from checkbox
        const allData = {
            ...data,
            dietaryrestriction   //we are adding checkbox array to the object
        }
        console.log(allData)
    }
    return (
        <section>
            <h1>Sign up form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" defaultValue="this@gmail.com" name='email' placeholder='email' />
                <br />
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" defaultValue="password123" name='password' />
                <br />
                <label htmlFor='description'>Description:</label>
                <textarea name="description" id="description"></textarea>
                <br />
                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input type="radio" name='employmentStatus' defaultChecked={true} value="employed" />
                        Employed
                    </label>
                    <label>
                        <input type="radio" name='employmentStatus' value="part-time" />
                        Part-Time
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Dietray Restriction:</legend>
                    <label>
                        <input type="checkbox" name='dietaryrestriction' defaultChecked={true} value="kosher" />
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name='dietaryrestriction' value="gluten-free" />
                        Gluten-free
                    </label>
                </fieldset>

                <label htmlFor="favColor">What is your favorite color?</label>
                <select id="favColor" name="favColor" required>
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <button>Submit</button>
            </form>

        </section>
    )
}