import axios from 'axios'
import { useEffect, useState } from 'react'
import { PortfolioDTO } from '../types/dto'
import { API_HOST } from '../utils/api'

const usePortfolio = (_id: string) => {
  const [portfolio, setPortfolio] = useState<PortfolioDTO | null>(null)
  const [error, setError] = useState<string>('')
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios<PortfolioDTO>(`${API_HOST}/portfolio/${_id}`)
        setPortfolio(res.data)
      } catch (err) {
        setError('Data not found')
      }
    }
    fetchPortfolio()
  }, [_id])
  return { portfolio, error }
}

export default usePortfolio
