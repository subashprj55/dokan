import { useMutation } from '@tanstack/react-query'
import { IFormInput } from '../signIn/types'
import { axiosAuth } from '../utils/axios'

const useSignup = (onSuccess: () => void, onError: () => void) => {
  const signUp = async (data: IFormInput) => {
    console.log(data)
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
