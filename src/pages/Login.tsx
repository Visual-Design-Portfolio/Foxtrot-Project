import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex h-screen">
      {/* Left Pane */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">LOGIN</h2>
            <h2 className="text-sm font-semibold mb-6 text-gray-500 text-center">
              How to i get started portfolio platform
            </h2>
          </div>

          {/* Username */}
          <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    placeholder="Username"
                    className="block w-full bg-violet-100 rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className="block w-full bg-violet-100 rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col lg:flex-row items-center justify-center">
                <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                  >
                    Login Now
                  </button>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 text-center">
                <p>-OR-</p>
              </div>

              <div className="mt-4 flex flex-col lg:flex-row items-center justify-center">
                <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                  <button
                    type="button"
                    className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github" className="w-4">
                      <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                    </svg>
                    Login with Github
                  </button>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Register
                </a>
                {/* <Link to="/register"><Link/> */}
              </p>
            </form>
          </div>

          {/* <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
        <p>Don&apos;t have an account? Register</p> */}
        </div>
      </div>
      {/* Right Pane */}
      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 lg:w-1/2 flex items-center justify-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="py-5 mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-white">
              New Platform Visual Design Portfolio
            </h2>
            <div className="max-w-md text-center">
              <img src="/src/assets/bglogin.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
