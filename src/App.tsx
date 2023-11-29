import { Routes, Route } from 'react-router-dom'
import './App.css'
import Template from './components/Template/Template'
import Create from './pages/Create'
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
// import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="re" element={<Re />} /> */}
        <Route path="/create" element={<Create />} />

        <Route path="/portfolio" element={<Template />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
