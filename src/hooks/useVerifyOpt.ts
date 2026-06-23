import { useMutation } from '@tanstack/react-query'
import { axiosAuth } from '../app/utils/axios'
import { useAuthStore } from '@/store/authStore'

interface IFormData {
  email: string
  OTP: string
}

const useVerifyOtp = (onSuccess: () => void, onError: () => void) => {
  const { login } = useAuthStore()
  const verify = async (data: IFormData) => {
    const response = await axiosAuth.post('/auth/verify-otp', data)
    login(response.data.access_token)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: verify,
    onSuccess,
    onError,
  })

  return { mutate, isPending }
}

export default useVerifyOtp
