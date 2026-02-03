import ReactDom from 'react-dom/client'

export default function FormCom(){
    return (
        <section>
            <h1>Sign up form</h1>
           <form>
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