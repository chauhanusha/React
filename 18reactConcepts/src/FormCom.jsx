import ReactDom from 'react-dom/client'

export default function FormCom(){
    
    function signUp(formData){
        // event.preventDefault()
        // const formEl = event.currentTarget
        // const formData = new FormData(formEl)
        const email = formData.get("email")
        const password = formData.get("password")
        //formEl.reset()
        console.log(email)
        console.log(password)
    }
    return (
        <section>
            <h1>Sign up form</h1>
           <form action={signUp}>
             <label htmlFor="email">Email:</label>
            <input id="email" type="email" name='email' placeholder='email' />
            <br />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name='password' />
            <br />
            <button>Submit</button>
           </form>

        </section>
    )
}