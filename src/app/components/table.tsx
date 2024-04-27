import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React from 'react'

const ProductTable = ({ products }: any) => {
  return (
    <TableContainer
      component={Paper}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <Table className="min-w-full">
        <TableHead className="bg-gray-50">
          <TableRow>
            <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
              Name
            </TableCell>
            <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
              Quantity
            </TableCell>
            <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
              Price
            </TableCell>
            <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
              Expire Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-white divide-y divide-gray-200">
          {products.map((product: any, index: any) => (
            <TableRow
              key={index}
              className="cursor-pointer md:hover:bg-gray-100"
            >
              <TableCell className="px-4 py-3 md:w-1/4">
                {product.name}
              </TableCell>
              <TableCell className="px-4 py-3 md:w-1/4">
                {product.quantity}
              </TableCell>
              <TableCell className="px-4 py-3 md:w-1/4">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="px-4 py-3 md:w-1/4">
                {product.expireDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductTable
