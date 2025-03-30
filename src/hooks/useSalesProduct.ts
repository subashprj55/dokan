import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosAuth } from '@/utils/axios'

const useSalesProduct = (onSuccess: () => void, onError: () => void) => {
  const queryClient = useQueryClient()

  const addItems = async (data: any) => {
    console.log(data)
    await axiosAuth.post('/sales', data)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: addItems,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stock'] })
      onSuccess()
    },
    onError,
  })

  return { mutate, isPending }
}

export default useSalesProduct
