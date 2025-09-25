//import {  } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'


const root = createRoot(document.getElementById("root"))
root.render(
  <main>
    <img src="react-logo.jpg" width= "40" alt="React Logo" />
  <h1>Fun facts about React</h1>
  <ul>
    <li>was first released in 2013</li>
    <li>was originally build by jordan walke</li>
    <li>has well over 100k stars on github</li>
    <li>is maintained by meta</li>
    <li>powers thousands of enterprise apps, including mobile apps</li>
  </ul>
  </main>
)