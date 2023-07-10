import { Link } from "react-router-dom"

const Header = () => {
  return(
    <header>
      <nav>
        <div className="">
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