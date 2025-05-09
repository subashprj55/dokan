import { useQuery } from '@tanstack/react-query'
import { axiosAuth } from '../utils/axios'

const useGetTransactionsByHour = () => {
  const getTransaction = async () => {
    const response = await axiosAuth.get('/sales/today/by-hour')
    return response.data
  }

  const { data, isPending, error } = useQuery({
    queryKey: ['getTransactionsByHour'],
    queryFn: getTransaction,
  })

  return { data, isPending, error }
}

export default useGetTransactionsByHour
