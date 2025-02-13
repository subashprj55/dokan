import { useQuery } from '@tanstack/react-query'
import { axiosAuth } from '../app/utils/axios'

const useGetUserInfo = () => {
  const getUser = async () => {
    const response = await axiosAuth.get('/user/me')
    return response.data
  }

  const { data, isPending, error } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  })

  return { data, isPending, error }
}

export default useGetUserInfo
