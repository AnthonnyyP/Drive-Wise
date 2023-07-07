import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import CarDetails from './pages/CarDetails'
import Listings from './pages/Listings'

const App = () => {

  return (
    <div className='App'>
      <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App