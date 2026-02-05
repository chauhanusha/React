import ReactDom from 'react-dom/client'

export default function FormCom(){
    
    function signUp(formData){
        // event.preventDefault()
        // const formEl = event.currentTarget
        // const formData = new FormData(formEl)
        const email = formData.get("email")
        const password = formData.get("password")
        const employmentStatus = formData.get("employmentStatus")
        //formEl.reset()
        console.log(email)
        console.log(password)
        console.log(employmentStatus)
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
                    <input type="radio" name='employmentStatus' defaultChecked={true} value="employed"/>
                    Employed
                </label>
                <label>
                    <input type="radio" name='employmentStatus' value="part-time"/>
                    Part-Time
                </label>
            </fieldset>
            <button>Submit</button>
           </form>

        </section>
    )
}