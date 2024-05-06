type Product = {
  id: number
  name: string
  quantity: number
  price: number
  expireDate: string
}

export interface IAllStockTableProps {
  filteredProducts: Product[]
}
