// Imports
import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import CarDetails from './pages/CarDetails'

// App Function
const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/listings/:listingId" element={<CarDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// Exports
export default App
