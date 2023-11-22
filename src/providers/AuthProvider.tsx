import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
  email: string | null
  token: string | null
  logout: () => void
  login: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('email')

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(!!token)
  const [email, setEmail] = useState<string | null>(user)
  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    const loginBody: LoginDTO = { email, password }

    try {
      const res = await axios.post<CredentialDTO>('http://localhost:8080/auth/login', loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('email', email)
      setIsLoggedin(true)
      setEmail(email)
    } catch (err) {
      throw new Error('Invalid email or password')
    }
  }
  const logout = () => {
    localStorage.clear()
    setIsLoggedin(false)
    setEmail(null)
    navigate('/')
  }
  return <AuthContext.Provider value={{ isLoggedIn, login, email, logout, token }}>{children}</AuthContext.Provider>
}

export default AuthProvider
