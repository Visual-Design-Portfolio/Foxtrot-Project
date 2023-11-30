import axios from 'axios'
import { useEffect, useState } from 'react'
import { PortfolioDTO } from '../types/dto'
import { API_HOST } from '../utils/api'
import { useAuth } from '../providers/AuthProvider'

const usePortfolio = (_id: string) => {
  const [portfolio, setPortfolio] = useState<PortfolioDTO | null>(null)
  const [error, setError] = useState<string>('')
  const { token } = useAuth()
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
  const deleteContent = async () => {
    if (!portfolio) return
    try {
      await axios.delete(`https://localhost:8080/portfolio/${_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      throw new Error('cannot update content')
    }
  }

  return { portfolio, error, deleteContent }
}

export default usePortfolio
