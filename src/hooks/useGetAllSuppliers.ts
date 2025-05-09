import { useQuery } from '@tanstack/react-query'
import { axiosAuth } from '../utils/axios'

const useGetAllSuppliers = () => {
  const getSuppliers = async () => {
    const response = await axiosAuth.get('/suppliers')
    return response.data
  }

  const { data, isPending, error } = useQuery({
    queryKey: ['suppliers'],
    queryFn: getSuppliers,
  })

  return { data, isPending, error }
}

export default useGetAllSuppliers
