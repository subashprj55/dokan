import { IFormInput } from '@/app/signIn/types'
import { axiosAuth } from '@/app/utils/axios'
import { useMutation } from '@tanstack/react-query'

const useSignup = (onSuccess: () => void, onError: () => void) => {
  const signUp = async (data: IFormInput) => {
    await axiosAuth.post('/auth/signup', data)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess,
    onError,
  })

  return { mutate, isPending }
}

export default useSignup
