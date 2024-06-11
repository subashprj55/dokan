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
  gmail: string
  address: string
  paymentMethod: string
  productsList: IProduct[]
}

type Action = {
  updateCustomerName: (firstName: State['customerName']) => void
  updatePhoneNumber: (phoneNumber: State['phoneNumber']) => void
  updateGmail: (gmail: State['gmail']) => void
  updateAddress: (address: State['address']) => void
  updatePaymentMethod: (paymentMethod: State['paymentMethod']) => void
  updateProductsList: (productsList: State['productsList']) => void
}

const useSalesStore = create<State & Action>((set) => ({
  customerName: '',
  phoneNumber: '',
  gmail: '',
  address: '',
  paymentMethod: '',
  productsList: [{ name: '', remaining: 0, quantity: 0, price: 0, total: 0 }],
  updateCustomerName: (customerName) =>
    set(() => ({ customerName: customerName })),
  updatePhoneNumber: (phoneNumber) => set(() => ({ phoneNumber: phoneNumber })),
  updateGmail: (gmail) => set(() => ({ gmail: gmail })),
  updateAddress: (customerAddress) => set(() => ({ address: customerAddress })),
  updatePaymentMethod: (paymentMethod) =>
    set(() => ({ paymentMethod: paymentMethod })),
  updateProductsList: (productsList) =>
    set(() => ({ productsList: productsList })),
}))

export default useSalesStore
