import { axiosAuth } from '@/utils/axios'
import { useQuery } from '@tanstack/react-query'

const useGetStock = () => {
  const getStock = async () => {
    const response = await axiosAuth.get('/item')
    return response.data
  }

  const { data, error, isPending } = useQuery({
    queryKey: ['stock'],
    queryFn: getStock,
  })

  return { data, error, isPending }
}

export default useGetStock
