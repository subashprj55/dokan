import { create } from 'zustand'

interface IProduct {
  name: string
  quantity: number
  price: number
  total: number
  [key: string]: string | number
}

type State = {
  supplierName: string
  contactNumber: string
  address: string
  note: string
  purchaseList: IProduct[]
  paymentMethod: string
}

type Action = {
  updateSupplierName: (supplierName: State['supplierName']) => void
  updateContactNumber: (contactNumber: State['contactNumber']) => void
  updateAddress: (address: State['address']) => void
  updateNote: (note: State['note']) => void
  updatePurchaseList: (productsList: State['purchaseList']) => void
  updatePaymentMethod: (paymentMethod: State['paymentMethod']) => void
}

const usePurchaseStor = create<State & Action>((set) => ({
  supplierName: '',
  contactNumber: '',
  address: '',
  note: '',
  purchaseList: [{ name: '', quantity: 0, price: 0, total: 0 }],
  paymentMethod: '',
  updateSupplierName: (supplierName) =>
    set(() => ({
      supplierName: supplierName,
    })),
  updateContactNumber: (contactNumber) =>
    set(() => ({ contactNumber: contactNumber })),
  updateAddress: (address) => set(() => ({ address: address })),
  updateNote: (note) => set(() => ({ note: note })),
  updatePurchaseList: (purchaseList) =>
    set(() => ({ purchaseList: purchaseList })),
  updatePaymentMethod: (paymentMethod) =>
    set(() => ({ paymentMethod: paymentMethod })),
}))

export default usePurchaseStor
