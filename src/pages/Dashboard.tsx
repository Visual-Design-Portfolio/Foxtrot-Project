import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Table from "../components/PortfolioTable/Table"
// import usePortfolios from '../hooks/usePortfolios'

const Dashboard = () => {
  // const { personalPortfolio } = usePortfolios()

  return (
    <>
      <Navbar />
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
        <div className="flex-col mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div className="bg-white/10 rounded-lg p-4 ">
            <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 to-transparent bg-clip-text text-transparent">
              Dashboard<span className="text-indigo-400">.</span>
            </h1>
            <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
            <a
              href="#"
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
              <div>
                <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium group-hover:text-indigo-400 leading-4">Jim Smith</p>
              </div>
            </a>
          </div>

          <div className="bg-white/10 rounded-lg mt-10 p-6">
            <h1 className="font-bold text-xl py-4 uppercase">My Portfolio</h1>

            {/* <div className="bg-black/60 to-white/5 p-6 rounded-lg col-span-8">
            <Table data={personalPortfolio} />
          </div> */}

            <div className="flex col-span-3 m-3 justify-center items-center gap-6">
              <Link to="/template">
                <img src="/Card.svg" />
              </Link>
              <Link to="/template">
                <img src="/Card1.svg" />
              </Link>
              <Link to="/template">
                <img src="/Card2.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Dashboard
