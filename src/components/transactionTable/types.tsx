export interface IProduct {
  name: string
  remaining: number
  quantity: number
  price: number
  total: number
  [key: string]: string | number
}

interface Product {
  id: number
  name: string
  quantity: number
  price: number
  expireDate: string
}

export interface ITransationTableProps {
  productsData: Product[]
}
