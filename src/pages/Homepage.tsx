import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="bg-black lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <h1 className="animate-pulse font-extrabold text-6xl bg-gradient-to-r from-violet-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            The best way to showcase your portfolio
          </h1>
          <p className="my-4 text-white">create your online portfolio website</p>

          <NavLink to="/login">
            <button className="sm:w-full lg:w-auto my-4 border rounded-md bg-violet-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500">
              Get Started!
            </button>
          </NavLink>
        </div>
        <div className="w-1/2">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aa8625109287767.5fd08439c7676.jpg" />
        </div>
      </div>

      <div className="bg-black flex align-center justify-center py-10 w-100%">
        <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-violet-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div className="bg-black lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="w-1/2">
          <img src="https://img.freepik.com/free-vector/social-media-3d-concept-background_52683-96688.jpg?w=1480&t=st=1700838278~exp=1700838878~hmac=8ade2b6a964518bb119bf7d7fc95c0a00e1d88055059fd8f1fb174ac61ace330" />
        </div>
        <div className="text-white xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Get started for free
          </h2>
          <p className="text-2xl py-2">How it works</p>
          <div className="text-xl py-2">
            <p>Step 1: Register for free</p>
            <p>Step 2: Create your portfolio</p>
            <p>Step 3: Get your own portfolio</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
