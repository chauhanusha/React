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
            <input id="email" type="email" defaultValue="this@gmail.com" name='email' placeholder='email' />
            <br />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" defaultValue="password123" name='password' />
            <br />
            <label htmlFor='description'>Description:</label>
            <textarea name="description" id="description"></textarea>
            <br />
            <button>Submit</button>
           </form>

        </section>
    )
}