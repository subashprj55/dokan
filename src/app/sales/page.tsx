'use client'
import React, { useState } from 'react'
import Container from '@/components/container'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import ProductTable from '@/components/table'
import { products } from '@/app/purchase/data'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <CustomerInformationForm />
          <ProductSection />
          <PaymentMethodSelection />
          <ProductInfoTable />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

const CustomerInformationForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="customer-name"
            label="Customer Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="customer-number"
            label="Customer Number"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="customer-gmail"
            label="Gmail"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="customer-address"
            label="Customer Address"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              id="payment-method"
              label="Payment Method"
              defaultValue=""
            >
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="credit">Credit</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

const ProductSection = () => {
  const [products, setProducts] = useState([
    { id: 1, name: '', price: '', quantity: '' },
  ])

  const handleAddProduct = () => {
    setProducts([
      ...products,
      { id: products.length + 1, name: '', price: '', quantity: '' },
    ])
  }

  const handleProductChange = (id: any, field: any, value: any) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, [field]: value }
      }
      return product
    })
    setProducts(updatedProducts)
  }

  const calculateTotalPrice = (price: any, quantity: any) => {
    if (!price || !quantity) return ''
    return (parseFloat(price) * parseFloat(quantity)).toFixed(2)
  }

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <TextField
                    value={product.name}
                    onChange={(e) =>
                      handleProductChange(product.id, 'name', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={product.price}
                    onChange={(e) =>
                      handleProductChange(product.id, 'price', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={product.quantity}
                    onChange={(e) =>
                      handleProductChange(
                        product.id,
                        'quantity',
                        e.target.value
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  {calculateTotalPrice(product.price, product.quantity)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleAddProduct}>Add Product</Button>
    </div>
  )
}

const PaymentMethodSelection = () => {
  const [paymentMethod, setPaymentMethod] = useState('')

  const handlePaymentMethodChange = (event: any) => {
    setPaymentMethod(event.target.value)
  }

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Selected Payment Method:', paymentMethod)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
      <div className="flex items-center space-x-4">
        <input
          type="radio"
          id="cash"
          name="payment-method"
          value="cash"
          checked={paymentMethod === 'cash'}
          onChange={handlePaymentMethodChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <label htmlFor="cash" className="text-lg text-gray-700">
          Cash
        </label>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="radio"
          id="credit"
          name="payment-method"
          value="credit"
          checked={paymentMethod === 'credit'}
          onChange={handlePaymentMethodChange}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <label htmlFor="credit" className="text-lg text-gray-700">
          Credit
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  )
}

const ProductInfoTable = () => {
  const handleOpenModal = () => {
    //    .....
  }

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Quck Sell Page</h1>
      <div className="flex justify-end mb-4">
        <Button
          className="capitalize"
          variant="contained"
          onClick={() => handleOpenModal()}
        >
          Sell
        </Button>
      </div>
      <ProductTable products={products} />
    </div>
  )
}

export default page
