import { SetStateAction } from 'react'
import { UseFormReset } from 'react-hook-form'

export interface INewSupplier {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
}

interface IStock {
  name: string
  quantity: number
  price: number
}

export interface IFormData {
  supplier: number
  stock: IStock[]
}

type ISupplier = {
  name: string
  id: number
}

export interface IConfirmDialogComponent {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  formData: IFormData
  totalPrice: number
  suppliers: ISupplier[]
  reset: UseFormReset<IFormData>
}

export interface IItem {
  id: number
  purchaseId: number
  itemId: number
  quantity: number
  price: number
  createdAt: string
  updatedAt: string
  item: {
    id: number
    name: string
    price: number
    createdAt: string
    updatedAt: string
  }
}

export interface Supplier {
  id: number
  name: string
  phoneNumber: string
  address: string
  createdAt: string
  updatedAt: string
  userId: number
}

export interface IPurchase {
  id: number
  totalCash: number
  createdAt: string
  updatedAt: string
  userId: number
  supplierId: number
  supplier: Supplier
  items: IItem[]
}
