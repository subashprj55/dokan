import React, { useState } from 'react'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { FaTrash } from 'react-icons/fa'

interface Product {
  name: string
  quantity: number
  price: number
  total: number
  [key: string]: string | number
}

const TransactionTable = () => {
  const [products, setProducts] = useState<Product[]>([
    { name: '', quantity: 0, price: 0, total: 0 },
  ])

  const handleAddRow = () => {
    setProducts([...products, { name: '', quantity: 0, price: 0, total: 0 }])
  }

  const handleRemoveRow = (index: number) => {
    const updatedProducts = [...products]
    updatedProducts.splice(index, 1)
    setProducts(updatedProducts)
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target
    const updatedProducts = [...products]
    updatedProducts[index][name] = value
    updatedProducts[index].total =
      Number(updatedProducts[index].quantity) *
      Number(updatedProducts[index].price)
    setProducts(updatedProducts)
  }

  const getTotal = () => {
    return products.reduce((total, product) => {
      return total + product.total
    }, 0)
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={(event) => handleChange(event, index)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    name="quantity"
                    value={product.quantity}
                    onChange={(event) => handleChange(event, index)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={(event) => handleChange(event, index)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  />
                </TableCell>
                <TableCell>${product.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Button onClick={() => handleRemoveRow(index)}>
                    <FaTrash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-end">
          <Button onClick={handleAddRow}>Add Row</Button>
        </div>
        <div className="mt-4 flex justify-end">
          <p>Total: ${getTotal().toFixed(2)}</p>
        </div>
      </TableContainer>
    </div>
  )
}

export default TransactionTable
