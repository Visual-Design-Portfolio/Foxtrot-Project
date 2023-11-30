import axios from 'axios'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CredentialDTO, LoginDTO, RegisterDTO, UserDTO } from '../types/dto'
import { API_HOST } from '../utils/api'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  success: string | null
  error: string | null
  isLoggedIn: boolean
  token: string | null
  userInfo: UserDTO | null
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
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<UserDTO | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get<UserDTO>(`${API_HOST}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(({data}) =>
      setUserInfo(data)
    )
  }, [token])


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
    } catch (err) {
      throw new Error('Invalid email or password')
    }
  }
  const logout = () => {
    localStorage.clear()
    setIsLoggedin(false)
    navigate('/')
  }
  return (
    <AuthContext.Provider value={{ success, error, register, isLoggedIn, login, logout, token, userInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
