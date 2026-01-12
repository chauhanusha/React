import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById("root"))

function Header() {
  return (
    <header className='header'>
      <img src="src/react-logo.jpg" className='nav-logo' alt="" />
      <nav>
        <ul className='nav-list'>
          <li className='nav-items'>Pricing</li>
          <li className='nav-items'>About</li>
          <li className='nav-items'>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li className='main-list'>was first released in 2013</li>
        <li className='main-list'>was originally build by jordan walke</li>
        <li className='main-list'>has well over 100k stars on github</li>
        <li className='main-list'>is maintained by meta</li>
        <li className='main-list'>powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

function Footer() {
  return (
    <footer className='foot-items'>
      <small className='foot-inside'>© 2026 chauhan development. All rights reserved.</small>
    </footer>
  )
}

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