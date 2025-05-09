import { useMutation, useQueryClient } from '@tanstack/react-query'
import { axiosAuth } from '@/utils/axios'
import { IFormData } from '@/app/purchase/types'

interface IPurchaseForm extends IFormData {
  totalPrice: number
}

const usePurchaseItems = (onSuccess: () => void, onError: () => void) => {
  const queryClient = useQueryClient()

  const addItems = async (data: IPurchaseForm) => {
    // await axiosAuth.post('/purchase', data)
    console.log(data)
  }

  const { mutate, isPending } = useMutation({
    mutationFn: addItems,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stock'] })
      queryClient.invalidateQueries({ queryKey: ['purchase-history'] })
      onSuccess()
    },
    onError,
  })

  return { mutate, isPending }
}

export default usePurchaseItems
