import { create } from 'zustand'

const lowStocksData = [
  { id: 1, name: 'Product A', quantity: 2 },
  { id: 2, name: 'Product B', quantity: 3 },
  { id: 3, name: 'Product C', quantity: 1 },
  { id: 4, name: 'Product A', quantity: 2 },
  { id: 5, name: 'Product B', quantity: 3 },
  { id: 6, name: 'Product C', quantity: 1 },
  { id: 7, name: 'Product C', quantity: 1 },
]

interface notificationData {
  id: number
  name: string
  quantity: number
}

type State = {
  lowStockProducts: notificationData[]
  totalNotifications: number
}

type Action = {
  updateNotifications: (totalnotifications: State['totalNotifications']) => void
}

const useNavBarStore = create<State & Action>((set) => ({
  lowStockProducts: lowStocksData,
  totalNotifications: lowStocksData.length,
  updateNotifications: (number) =>
    set(() => ({
      totalNotifications: number,
    })),
}))

export default useNavBarStore
