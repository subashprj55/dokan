import { create } from 'zustand'

interface IProduct {
  name: string
  remaining: number
  quantity: number
  price: number
  total: number
  [key: string]: string | number
}

type State = {
  customerName: string
  phoneNumber: string
  paymentMethod: string
  productsList: IProduct[]
}

type Action = {
  updateCustomerName: (firstName: State['customerName']) => void
  updatePhoneNumber: (lastName: State['phoneNumber']) => void
  updatePaymentMethod: (paymentMethod: State['customerName']) => void
  updateProductsList: (productsList: State['productsList']) => void
}

const useQuickSalesStore = create<State & Action>((set) => ({
  customerName: '',
  phoneNumber: '',
  paymentMethod: '',
  productsList: [{ name: '', remaining: 0, quantity: 0, price: 0, total: 0 }],
  updateCustomerName: (customerName) =>
    set(() => ({ customerName: customerName })),
  updatePhoneNumber: (phoneNumber) => set(() => ({ phoneNumber: phoneNumber })),
  updatePaymentMethod: (paymentMethod) =>
    set(() => ({ paymentMethod: paymentMethod })),
  updateProductsList: (productsList) =>
    set(() => ({ productsList: productsList })),
}))

export default useQuickSalesStore
