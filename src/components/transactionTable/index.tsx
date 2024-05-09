import React, { useState } from 'react'
import {
  Autocomplete,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import { FaTrash } from 'react-icons/fa'
import { IProduct, ITransationTableProps } from './types'

const TransactionTable = ({ productsData }: ITransationTableProps) => {
  const [products, setProducts] = useState<IProduct[]>([
    { name: '', quantity: 0, price: 0, total: 0 },
  ])

  const allProductName = productsData.map((pro: any) => {
    return pro.name
  })

  console.log(products)

  ////////////////////////////////////////////////////////////////

  const handleChange = (value: any, index: number) => {
    const selectedProduct = products.find((product) => product.name === value)
    const updatedProducts = [...products]
    updatedProducts[index].name = value
    updatedProducts[index].price = selectedProduct ? selectedProduct.price : 0
    updatedProducts[index].total =
      updatedProducts[index].price * updatedProducts[index].quantity
    setProducts(updatedProducts)
  }

  ////////////////////////////////////////////////////////////////
  const handleAddRow = () => {
    setProducts([
      ...products,
      {
        name: '',
        quantity: 0,
        price: 0,
        total: 0,
      },
    ])
  }

  const handleRemoveRow = (index: number) => {
    const updatedProducts = [...products]
    updatedProducts.splice(index, 1)
    setProducts(updatedProducts)
  }

  const getTotal = () => {
    return products.reduce((total, product) => {
      return total + product.total
    }, 0)
  }

  return (
    <div className="overflow-auto">
      <TableContainer component={Paper} className="min-w-full">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Remaining</TableCell>
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
                  <Autocomplete
                    disableClearable
                    freeSolo
                    options={allProductName}
                    value={product.name}
                    onChange={(event, value) => handleChange(value, index)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Search Products"
                        className="w-[130px] lg:w-[200px]"
                        sx={{
                          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                              border: '1px solid gray',
                            },
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell>0</TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={product.quantity}
                    className="w-[130px] lg:w-[200px]"
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          border: '1px solid gray',
                        },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={product.price}
                    className="w-[130px] lg:w-[200px]"
                    sx={{
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                        {
                          border: '1px solid gray',
                        },
                    }}
                  />
                </TableCell>
                <TableCell>${product.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Button onClick={() => handleRemoveRow(index)}>
                    <FaTrash className="text-pink-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-3 px-3 flex justify-between items-center">
          <Button className="text-blue-600 " onClick={handleAddRow}>
            Add Row
          </Button>
          <p>Total: Rs {getTotal().toFixed(2)}</p>
        </div>
      </TableContainer>
    </div>
  )
}

export default TransactionTable
