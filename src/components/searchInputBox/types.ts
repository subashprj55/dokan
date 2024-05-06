import { ChangeEvent } from 'react'

export interface ISearchInputProps {
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
