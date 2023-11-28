import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Homepage from './pages/Homepage'
import Create from './pages/Create'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'


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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
