// import { Route, Routes } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Create from './pages/Create'
import Template from './components/Template/Template'
import Create from './pages/Create'
import Login from './pages/Login'
import Register from './pages/Register'
<<<<<<< HEAD
// import Homepage from './pages/Homepage'
// import Navbar from './components/Navbar'
=======
import Homepage from './pages/Homepage'
import Create from './pages/Create'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

>>>>>>> main

function App() {
  return (
    <div>
<<<<<<< HEAD
      {/* <Navbar /> */}
=======
      <Navbar />

>>>>>>> main
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="re" element={<Re />} /> */}
        <Route path="/create" element={<Create />} />
<<<<<<< HEAD
        <Route path="/portfolio" element={<Template />} />
        {/* <Route path="/" element={<Homepage />} /> */}
=======
>>>>>>> main
      </Routes>
      <Footer />
    </div>
  )
}

export default App
