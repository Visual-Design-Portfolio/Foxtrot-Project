import { PortfolioDetailsDTO } from '../../types/dto'

export interface ITableProps {
  data: PortfolioDetailsDTO[]
}

const Table = ({ data }: ITableProps) => (
  <table className="table-fixed w-full">
    <thead>
      <tr>
        <th>Portfolio name</th>
        <th>Owner</th>
        <th>Picture</th>
        <th>Created at</th>
        <th>Updated at</th>
        {/* <th>Education</th> */}
        {/* <th>Work experience</th> */}
      </tr>
    </thead>
    <tbody>
      {data.map(({ 
      createdAt,
      // education,
      name,
      ownerName,
      picture,
      updatedAt,
      // workExperience,
     }, i) => (
        <tr key={`portfolio-row-${i}`}>
          {/* <td>{JSON.stringify(education)}</td> */}
          <td>{name}</td>
          <td>{ownerName}</td>
          <td><img src={picture} alt="port picture" /></td>
          <td>{`${createdAt}`}</td>
          <td>{`${updatedAt}`}</td>
          {/* <td>{JSON.stringify(workExperience)}</td> */}
        </tr>
      ))}
    </tbody>
  </table>
)

export default Table
