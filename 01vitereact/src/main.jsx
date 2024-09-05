import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//we can add the jsx inside this main file
function MyApp(){   //this syntax is parsed in to objects to create trees
    return(
        <h1>This component is inside main file</h1>
    )
}

//to check if we can directly pass the element (it will not run because it doesn't follow the syntax of react rendering function)
// const reactElement = {     //we are directly creating object
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

//another way of creating object  => this is supported by react
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

//variable injection in element
const anotherUser = "chauhanusha"

//using react
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
    anotherUser   //at last we can add variables in react element
)

//we are rendering the app component using reactDom
ReactDOM.createRoot(document.getElementById('root')).render(     //creatRoot is basically creating the tree
    //this is also allowed => MyApp(), but we should not use it
    reactElement

    // <App />
)
