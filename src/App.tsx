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
// import Homepage from './pages/Homepage'
// import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/portfolio" element={<Template />} />
        {/* <Route path="/" element={<Homepage />} /> */}
      </Routes>
    </div>
  )
}

export default App
