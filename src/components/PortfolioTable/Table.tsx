import { Link } from 'react-router-dom'
import { PortfolioDTO } from '../../types/dto'

export interface ITableProps {
  data: PortfolioDTO[]
}

const Table = ({ data }: ITableProps) => {
  const handleClick = (id: string) => {
    console.log(`clicked ${id}`)
  }
  return (
    <>
      {data.map((portfolio, index) => (
        <div
          key={index}
          className="flex p-2 w-40 h-36 rounded-lg bg-purple-800 mb-4 items-center justify-center"
          onClick={() => handleClick(portfolio._id)}
        >
          <Link to={`/template/${portfolio._id}`}>
            <h1>{portfolio.name}</h1>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Table
