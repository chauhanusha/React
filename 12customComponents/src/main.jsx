import { createRoot } from 'react-dom/client'
import './index.css'


//React project - using custom component
const root = createRoot(document.getElementById("root"))

//this is custom component -> provides composibility
function Page() {
    return (
        <div>
            <header>
                <img src="src/react-logo.jpg" width="40px" alt="react logo" />
            </header>
            <main>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>was first released in 2013</li>
                    <li>was originally build by jordan walke</li>
                    <li>has well over 100k stars on github</li>
                    <li>is maintained by meta</li>
                    <li>powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
            <footer>
                <small>© 2026 chauhan development. All rights reserved.</small>
            </footer>
        </div>
    )
}

root.render(
        <Page />
)


