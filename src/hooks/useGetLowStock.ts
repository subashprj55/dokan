import { axiosAuth } from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'

const useGetLowStock = () => {
  const getStock = async () => {
    const response = await axiosAuth.get('/item/low-stock')
    return response.data
  }

  const { data, error, isPending } = useQuery({
    queryKey: ['lowStock'],
    queryFn: getStock,
  })

  return { data, error, isPending }
}

export default useGetLowStock
