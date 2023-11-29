import { Routes, Route } from 'react-router-dom'
import './App.css'
import Template from './components/Template/Template'
import Create from './pages/Create'
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

function App() {
  const isShowNavbar = location.pathname === ('/' || '/login' || '/register' || '/dashboard' || '/create')
  console.log('location.pathname', location.pathname)
  console.log('isShowNavbar', isShowNavbar)

  return (
    <>
      {isShowNavbar ? <Navbar /> : null}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/portfolio" element={<Template />} />
      </Routes>

      {isShowNavbar ? <Footer /> : null}
    </>
  )
}

export default App
