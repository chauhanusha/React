import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './index.css'


const root = createRoot(document.getElementById('root'))

function Pro() {
    return (
        <>
            <Header />
            <MainContent />
        </>
    )
}


root.render(
    <Pro />
)

