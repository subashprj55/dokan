import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { IAllStockTableProps } from './types'

const AllStockTable = ({ filteredProducts }: IAllStockTableProps) => {
  return (
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
              <TableCell>Expire Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product: any) => (
              <TableRow
                key={product.id}
                className="cursor-pointer md:hover:bg-gray-100"
              >
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.expireDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AllStockTable
