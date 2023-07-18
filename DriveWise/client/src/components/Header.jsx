// Imports
import { Link } from 'react-router-dom'

// Header Function
const Header = () => {
  return (
    <header>
      <h1 className="header-title">
        <a href="/home">DRIVEWISE</a>
      </h1>
      <nav>
        <div className="nav-bar">
          <Link to={'/home'}>HOME</Link>
          <Link to={'/about'}>ABOUT</Link>
          <Link to={'/contact'}>CONTACT</Link>
          <Link to={'/signup'}>SIGN-UP</Link>
          <Link to={'/signin'}>SIGN-IN</Link>
        </div>z
      </nav>
    </header>
  )
}

// Export
export default Header
