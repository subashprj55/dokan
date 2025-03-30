import { SetStateAction } from 'react'

export interface IConfirmSalesModelSection {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
}
