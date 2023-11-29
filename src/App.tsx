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
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="/portfolio" element={<Template />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
