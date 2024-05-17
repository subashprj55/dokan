import { SetStateAction } from 'react'

export interface IDoTextFIeld {
  value: string | number
  setValue: React.Dispatch<SetStateAction<string>>
  placeholder: string
}
