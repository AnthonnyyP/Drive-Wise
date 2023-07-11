import { Link } from "react-router-dom"

const Header = () => {
  return(
    <header>
      <h1 className="header-title">DriveWise</h1>
      <nav>
        <div className="nav-bar">
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/signup'}>Sign-Up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header