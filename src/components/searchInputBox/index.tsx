import { FaSearch } from 'react-icons/fa'
import { ISearchInputProps } from './types'

const SearchInput = ({ searchTerm, handleSearch }: ISearchInputProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products"
        className="py-2 pl-8 pr-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
  )
}

export default SearchInput
