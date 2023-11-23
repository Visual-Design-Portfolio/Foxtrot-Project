import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Create from './pages/Create'

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="create" element={<Create />} />
        {/* <Route path="re" element={<Re />} /> */}
      </Routes>
    </div>
  )
}

export default App
