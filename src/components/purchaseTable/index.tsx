import React from 'react'
import {
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

const PurchaseTable = ({
  purchaseList,
  updatePurchaseList,
}: ITransationTableProps) => {
  const handleTextFieldChange = (
    name: string,
    value: number | string,
    index: number
  ) => {
    const updatedProducts = [...purchaseList]
    updatedProducts[index][name] = value
    updatedProducts[index].total =
      updatedProducts[index].price * updatedProducts[index].quantity
    updatePurchaseList(updatedProducts)
  }

  const findRowTotal = (quantity: number, price: number) => {
    return (quantity * price).toFixed(2)
  }

  ////////////////////////////////////////////////////////////////
  const handleAddRow = () => {
    updatePurchaseList([
      ...purchaseList,
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
    const updatedProducts = [...purchaseList]
    updatedProducts.splice(index, 1)
    updatePurchaseList(updatedProducts)
  }

  const getTotal = () => {
    return purchaseList.reduce((total, product) => {
      return total + product.total
    }, 0)
  }

  return (
    <div>
      <TableContainer component={Paper} className="min-w-full shadow-none">
        <div className="overflow-auto">
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
              {purchaseList.map((product, index) => (
                <TableRow key={index}>
                  {/* Product Name */}
                  <TableCell>
                    <TextField
                      value={product.name}
                      onChange={(event) =>
                        handleTextFieldChange('name', event.target.value, index)
                      }
                      className="w-[130px] lg:w-[180px] "
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                          {
                            border: '1px solid gray',
                          },
                      }}
                    />
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

export default PurchaseTable
