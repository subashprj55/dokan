import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosAuth } from '@/utils/axios'

interface IData {
  user: string
  number?: string
  address?: string
}

const useAddSupplier = (onSuccess: () => void, onError: () => void) => {
  const queryClient = useQueryClient()

  const addSupplier = async (data: IData) => {
    await axiosAuth.post('/suppliers', data)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: addSupplier,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] })
      onSuccess()
    },
    onError,
  })

  return { mutate, isPending }
}

export default useAddSupplier
