import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot.document.getElementById("root")
const reactElement = <h1>Hello from jsx</h1>

//creating a custom component
function MainContent() {
  return <h1>React is great</h1>
}

root.render(
  //reactElemen
  <MainContent/>
)
