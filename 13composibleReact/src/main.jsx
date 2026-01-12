import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import Footer from './Components/Foot'
import MainContent from './Components/Maincon'
const root = createRoot(document.getElementById("root"))

function Page(){
  return(
    <>
  <Header />
  <MainContent />
  <Footer />
  </>
  )
}

root.render(
  <Page />
)