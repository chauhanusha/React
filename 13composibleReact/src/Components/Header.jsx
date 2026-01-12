export default function Header() {
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