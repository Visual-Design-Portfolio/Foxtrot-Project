import { Link } from 'react-router-dom'
import { PortfolioDTO } from '../../types/dto'

export interface ITableProps {
  data: PortfolioDTO[]
}

const Table = ({ data }: ITableProps) => {
  const handleClick = (id: string) => {
    console.log(`clicked ${id}`)
  }

  const handleDelete = () => {
    deleteContent()
  }

  return (
    <>
      {data.map((portfolio, index) => (
        <Link
          to={`/template/${portfolio._id}`}
          key={index}
          className="w-52 h-52 rounded-lg bg-gradient-to-r from-violet-300 to-violet-400 shadow-2xl relative"
          onClick={() => handleClick(portfolio._id)}
        >
          <div className="text-slate-50 p-5 pt-10 font-semibold">
            <h1 className="text-2xl">{portfolio.name}</h1>
            <p className="text-[#181818]">{portfolio.ownerName}</p>
            <button
              onClick={handleDelete}
              type="submit"
              className="flex justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 absolute bottom-5"
            >
              Delete
            </button>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Table
function deleteContent() {
  throw new Error('Function not implemented.')
}
