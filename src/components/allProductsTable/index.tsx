import React, { useState } from 'react'
import useGetStock from '@/hooks/useGetStock'
import SearchInput from '../searchInputBox'
import { TableComponent } from './TableComponent'

const AllStockTable = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isPending, error } = useGetStock()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredProducts = data?.filter((product: any) =>
    Object.values(product).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold mb-2">Products</h2>
        <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <TableComponent
        data={filteredProducts}
        isPending={isPending}
        error={error}
      />
    </div>
  )
}

export default AllStockTable
