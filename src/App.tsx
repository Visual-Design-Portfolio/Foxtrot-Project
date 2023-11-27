import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Create from './pages/Create'
// import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/" element={<Homepage />} /> */}
      </Routes>
    </div>
  )
}

export default App
