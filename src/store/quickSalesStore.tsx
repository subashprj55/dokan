import { create } from 'zustand'

type State = {
  customerName: string
  phoneNumber: string
}

type Action = {
  updateFirstName: (firstName: State['customerName']) => void
  updatePhoneNumber: (lastName: State['phoneNumber']) => void
}

// Create your store, which includes both state and (optionally) actions
const useQuickSalesStore = create<State & Action>((set) => ({
  customerName: '',
  phoneNumber: '',
  updateFirstName: (customerName) =>
    set(() => ({ customerName: customerName })),
  updatePhoneNumber: (phoneNumber) => set(() => ({ phoneNumber: phoneNumber })),
}))

export default useQuickSalesStore
