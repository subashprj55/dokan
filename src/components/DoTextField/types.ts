import { SetStateAction } from 'react'

export interface IDoTextFIeld {
  value: string | number
  setValue: (value: string) => void
  placeholder: string
  error?: boolean
  helperText?: string
}
