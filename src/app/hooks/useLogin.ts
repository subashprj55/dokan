import { useMutation } from '@tanstack/react-query'
import { IFormInput } from '../login/types'
import { axiosAuth } from '../utils/axios'
import { useContext } from 'react'
import { AuthContext } from '@/providers/AuthContex'

const useLogin = (onSuccess: () => void, onError: () => void) => {
  const auth = useContext(AuthContext)

  const login = async (data: IFormInput) => {
    const response = await axiosAuth.post('/auth/signin', data)
    auth?.login(response.data.access_token)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess,
    onError,
  })

  return { mutate, isPending }
}

export default useLogin
