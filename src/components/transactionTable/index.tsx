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
import { ITransationTableProps } from './types'

const TransactionTable = ({
  productsData,
  productsList,
  updateProductsList,
}: ITransationTableProps) => {
  const allProductName = productsData.map((pro: any) => {
    return pro.name
  })

  const handleChange = (value: string, index: number) => {
    const updatedProducts = [...productsList]
    updatedProducts[index].name = value
    updatedProducts[index].quantity = 1

    // Find the selected product's quantity from productsData array
    const selectedProductData = productsData.find(
      (product) => product.name === value
    )
    if (selectedProductData) {
      updatedProducts[index].remaining = selectedProductData.quantity
      updatedProducts[index].price = selectedProductData.price
    }
    updatedProducts[index].total =
      updatedProducts[index].price * updatedProducts[index].quantity

    updateProductsList(updatedProducts)
  }

  const handleTextFieldChange = (
    name: string,
    value: number | string,
    index: number
  ) => {
    const updatedProducts = [...productsList]
    updatedProducts[index][name] = value
    updatedProducts[index].total =
      updatedProducts[index].price * updatedProducts[index].quantity
    updateProductsList(updatedProducts)
  }

  const findRowTotal = (quantity: number, price: number) => {
    return (quantity * price).toFixed(2)
  }

  ////////////////////////////////////////////////////////////////
  const handleAddRow = () => {
    updateProductsList([
      ...productsList,
      {
        name: '',
        remaining: 0,
        quantity: 0,
        price: 0,
        total: 0,
      },
    ])
  }

  const handleRemoveRow = (index: number) => {
    const updatedProducts = [...productsList]
    updatedProducts.splice(index, 1)
    updateProductsList(updatedProducts)
  }

  const getTotal = () => {
    return productsList.reduce((total, product) => {
      return total + product.total
    }, 0)
  }

  return (
    <div>
      <TableContainer component={Paper} className="min-w-full">
        <div className="overflow-auto">
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
              {productsList.map((product, index) => (
                <TableRow key={index}>
                  {/* Product Name */}
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
                          className="w-[130px] lg:w-[180px]"
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
                  {/*Remaining Product */}
                  <TableCell className="text-gray-500 text-base">
                    {product.remaining}
                  </TableCell>
                  {/* quantity */}
                  <TableCell>
                    <TextField
                      type="number"
                      inputProps={{ min: 0 }}
                      value={product.quantity}
                      onChange={(event) =>
                        handleTextFieldChange(
                          'quantity',
                          event.target.value,
                          index
                        )
                      }
                      className="w-[130px] lg:w-[180px] "
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          {
                            border: '1px solid gray',
                          },
                        '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':
                          {
                            color:
                              product.remaining < product.quantity ? 'red' : '',
                          },
                      }}
                    />
                  </TableCell>
                  {/* price */}
                  <TableCell>
                    <TextField
                      type="number"
                      value={product.price}
                      onChange={(event) =>
                        handleTextFieldChange(
                          'price',
                          event.target.value,
                          index
                        )
                      }
                      className="w-[130px] lg:w-[180px]"
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          {
                            border: '1px solid gray',
                          },
                      }}
                    />
                  </TableCell>
                  {/* row total price */}
                  <TableCell>
                    Rs {findRowTotal(product.price, product.quantity)}
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleRemoveRow(index)}>
                      <FaTrash className="text-pink-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-3 px-3 flex justify-between items-center">
          <Button className="text-yellow-700" onClick={handleAddRow}>
            Add Product
          </Button>
          <p>Total: Rs {getTotal().toFixed(2)}</p>
        </div>
      </TableContainer>
    </div>
  )
}

export default TransactionTable
