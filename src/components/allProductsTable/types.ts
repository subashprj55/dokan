export interface IProduct {
  id: number
  name: string
  price: number
  quantity: number
}

export interface ITableComponent {
  data: IProduct[]
  isPending: boolean
  error: Error | null
}
