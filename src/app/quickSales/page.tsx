'use client'
import React, { useState } from 'react'
import {
  TextField,
  Grid,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
  Table,
  TableHead,
} from '@mui/material'
import Container from '@/components/container'
import NavContainer from '@/components/navContainer'
import { products } from '@/app/purchase/data'
import Footer from '@/components/footer'
import TransactionTable from '@/components/transactionTable'
import PopupWindow from '@/components/popUpWindow/popUpModel'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <ProductsInfoSection />
          <CustomerInformationForm />
          <PaymentMethodSelection />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default page

const CustomerInformationForm = () => {
  return (
    <div className="mt-10">
      <h2 className="text-lg md:text-xl font-medium mb-5">
        Customer Information
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="customer-name"
            placeholder="Customer Name"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '1px solid gray',
                },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="customer-phone"
            placeholder="Phone Number"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '1px solid gray',
                },
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

const ProductsInfoSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl md:text-2xl font-medium mb-5">
        Products Transaction
      </h2>
      <TransactionTable productsData={products} />
    </div>
  )
}

const PaymentMethodSelection = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [popUpModel, setPopUpModel] = useState(false)

  const handlePaymentMethodChange = (event: any) => {
    setPaymentMethod(event.target.value)
  }

  const handleSubmit = () => {
    setPopUpModel(true)
    console.log('Selected Payment Method:', paymentMethod)
  }

  return (
    <div className="bg-white mt-10">
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
      <div className="mt-5">
        <button
          onClick={handleSubmit}
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white text-base py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
      <PopupWindow popUpModel={popUpModel} setPopUpModel={setPopUpModel}>
        <QuickSalesSubmitSection />
      </PopupWindow>
    </div>
  )
}

const QuickSalesSubmitSection = () => {
  return (
    <div className="p-2 md:p-4 w-full m-2 md:min-w-[500px;]">
      <h1>
        <span className="text-xl font-semibold">Customer Name </span>: Suresh
        Dahal
      </h1>
      <h2>
        <span className="text-lg">Phone Number </span>: 9842322232
      </h2>
      <h1 className="text-xl font-semibold mt-5">Products Info</h1>
      <div>
        <TableContainer component={Paper} className="min-w-full mt-4">
          <Table>
            <TableHead>
              <TableRow className="bg-gray-100">
                <TableCell>Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>patato</TableCell>
                <TableCell>12</TableCell>
                <TableCell>100</TableCell>
                <TableCell>1200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rice</TableCell>
                <TableCell>1</TableCell>
                <TableCell>600</TableCell>
                <TableCell>600</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="mt-5">
          <p className="capitalize text-lg">Transaction on cash</p>
        </div>
      </div>
    </div>
  )
}
