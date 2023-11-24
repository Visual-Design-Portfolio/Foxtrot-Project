import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <nav className="w-full text-gray-700 bg-gray-200 dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Visual Design Portfolio
          </NavLink>
        </div>
        <div className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
          {isLoggedIn && (
            <Link to={'/create'}>
              <button className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-violet-200 focus:outline-none focus:shadow-outline">
                Create Portfolio
              </button>
            </Link>
          )}

          <Link
            to="/template"
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-violet-200 focus:outline-none focus:shadow-outline"
          >
            Template
          </Link>
          <Link
            to="/allportfolio"
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-violet-200 focus:outline-none focus:shadow-outline"
          >
            All Portfolio
          </Link>
          {isLoggedIn ? (
            <>
              <span
                onClick={logout}
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-violet-200 focus:outline-none focus:shadow-outline"
              >
                Logout
              </span>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-violet-200 focus:outline-none focus:shadow-outline"
            >
              Login
            </Link>
          )}
          <Link
            to="/register"
            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-violet-200 focus:outline-none focus:shadow-outline"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
