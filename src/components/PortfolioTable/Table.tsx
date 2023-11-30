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
    <div>
      {data.map((portfolio, index) => (
        <div key={index} className="w-36 h-36 bg-purple-800 mb-4" onClick={() => handleClick(portfolio._id)}>
          <Link to={`/template/${portfolio._id}`}>
            <h1>{portfolio.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Table
