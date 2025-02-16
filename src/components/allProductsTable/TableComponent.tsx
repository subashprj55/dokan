import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { IProduct, ITableComponent } from './types'
import toast from 'react-hot-toast'

export const TableComponent = ({ data, isPending, error }: ITableComponent) => {
  if (isPending) {
    return <Skeleton variant="rounded" height={500} />
  }

  if (error) {
    return <Skeleton animation={false} variant="rounded" height={500} />
  }

  if (data.length === 0) {
    return (
      <h1 className="text-center text-lg font-semibold">
        No Product data found
      </h1>
    )
  }

  return (
    <div className="max-h-[500px;] overflow-y-auto shadow-md">
      {error && toast.error('Unable to get products list. Please try again')}
      <div className="mt-8">
        <TableContainer
          component={Paper}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <Table className="min-w-full">
            <TableHead className="bg-gray-50">
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-white divide-y divide-gray-200">
              {data?.map((product: IProduct) => (
                <TableRow
                  key={product.id}
                  className="cursor-pointer md:hover:bg-gray-100"
                >
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>Rs {product.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
