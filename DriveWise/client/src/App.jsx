// Imports
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'

// App Function
const App = () => {

  return (
    <div className='App'>
      <Header/>
      <main>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </main>
    </div>
  )
}

// Exports
export default App