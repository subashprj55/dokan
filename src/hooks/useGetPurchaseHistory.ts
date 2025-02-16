import { axiosAuth } from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'

const useGetPurchaseHistory = () => {
  const getHistory = async () => {
    const response = await axiosAuth.get('/purchase')
    return response.data
  }

  const { data, error, isPending } = useQuery({
    queryKey: ['purchase-history'],
    queryFn: getHistory,
  })

  return { data, error, isPending }
}

export default useGetPurchaseHistory
