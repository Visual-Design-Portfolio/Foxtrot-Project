import { Routes, Route, useLocation } from 'react-router-dom'
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
import TemplateExample from './components/TemplateExample/TemplateExample'

function App() {
  const location = useLocation()
  const { isLoggedIn } = useAuth()
  const isShowNavbar = location.pathname === ('/' || '/login' || '/register' || '/dashboard' || '/create')

  return (
    <>
      {isShowNavbar ? <Navbar /> : null}
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
          </Route>
          <Route path="/template/:id" element={<Template />} />
          <Route path="/template" element={<TemplateExample />} />
        </Routes>
        {isShowNavbar ? <Footer /> : null}
      </div>
    </>
  )
}

export default App
