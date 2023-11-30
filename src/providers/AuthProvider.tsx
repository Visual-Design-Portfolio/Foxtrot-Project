import { ReactNode, createContext, useContext, useState } from 'react'
import { CredentialDTO, LoginDTO, RegisterDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API_HOST } from '../utils/api'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  success: string | null
  error: string | null
  isLoggedIn: boolean
  email: string | null
  token: string | null
  logout: () => void
  login: (email: string, password: string) => Promise<void>
  register: (registerData: RegisterDTO) => Promise<void>
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(!!token)
  const [email, setEmail] = useState<string | null>(localStorage.getItem('email'))
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const register = async (registerData: RegisterDTO) => {
    try {
      const response = await axios.post(`${API_HOST}/user/`, registerData)

      console.log('Registration successful:', response.data)
      setSuccess(response.data.message)
      setError(null)
      navigate('/login')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) setError(err.response.data.message)
        setSuccess(null)
        navigate('/login')
      } else {
        console.error('Registration error:', err)
        setError('Internal Server Error')
      }
    }
  }

  const login = async (email: string, password: string) => {
    const loginBody: LoginDTO = { email, password }

    try {
      const res = await axios.post<CredentialDTO>(`${API_HOST}/auth/login`, loginBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('email', email)
      setToken(res.data.accessToken)
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
  return (
    <AuthContext.Provider value={{ success, error, register, isLoggedIn, login, email, logout, token }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
