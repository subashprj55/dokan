import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/store/authStore'
import { IFormInput } from '@/app/login/types'
import { axiosAuth } from '@/app/utils/axios'

const useLogin = (onSuccess: () => void, onError: () => void) => {
  const { login } = useAuthStore()

  const signin = async (data: IFormInput) => {
    const response = await axiosAuth.post('/auth/signin', data)
    login(response.data.access_token)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: signin,
    onSuccess,
    onError,
  })

  return { mutate, isPending }
}

export default useLogin
