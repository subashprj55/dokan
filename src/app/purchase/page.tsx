'use client'
import React, { useState } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import Container from '@/components/containder'
import NavContainer from '@/components/navContainer'
import { products } from './data'
import { Paper, Grid, TextField } from '@mui/material'
import TransactionTable from '@/components/transactionTable'
import SearchInput from '@/components/searchInputBox'
import AllStockTable from '@/components/allProductsTable'
import PopupWindow from '@/components/popUpWindow'

const PurchaseItem = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <AllStockTalbe />
          <SupplierInformation />
          <NewProductsInfo />
          <PaymentMethodSelection />
          <PurchaseHistory />
        </Container>
      </NavContainer>
    </>
  )
}

export default PurchaseItem

const AllStockTalbe = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredProducts = products.filter((product) =>
    Object.values(product).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold mb-2">Products</h2>
        <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <div className="max-h-[500px;] overflow-y-auto shadow-md">
        <AllStockTable filteredProducts={filteredProducts} />
      </div>
    </div>
  )
}

const SupplierInformation = () => {
  return (
    <Box className="mt-10 md:mt-20 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Supplier Information</h2>
      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={6}>
          <TextField
            id="supplierName"
            label="Supplier Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="contactNumber"
            label="Contact Number"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="notes"
            label="Notes"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

const NewProductsInfo = () => {
  return (
    <div className="p-6 pb-0">
      <h2 className="text-lg font-semibold mb-2">New Products Info</h2>
      <div>
        <TransactionTable productsData={products} />
      </div>
    </div>
  )
}

const PaymentMethodSelection = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [popUpModel, setPopUpModel] = useState(false)
  const [error, setError] = useState(false)

  const handlePaymentMethodChange = (event: any) => {
    setPaymentMethod(event.target.value)
  }

  const handleSubmit = () => {
    if (!paymentMethod) return
    if (paymentMethod === 'credit') {
      setError(true)
      return
    }
    setError(false)
    setPopUpModel(true)
  }

  const renderContent = () => {
    if (error) {
      return (
        <div className="mt-5 ">
          <p className="text-red-500">
            Credit Transaction need Customer Phone Number
          </p>
        </div>
      )
    }
    return <></>
  }

  return (
    <div className="bg-white p-6">
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
      {renderContent()}
      <div className="">
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
      <h1 className="text-xl font-medium mb-1">Customer Name : Ram Sharma</h1>
      <h2>
        <span className="text-lg">Phone Number </span>: 9842322232
      </h2>
      <h2>
        <span className="text-lg">Gmail </span>: MeroDokan123@gmail.com
      </h2>
      <h2>
        <span className="text-lg capitalize">Adress </span>: Chitwan, Nepal
      </h2>
      <h1 className="text-xl font-semibold mt-5">Products Info</h1>
      <div className="mt-4 ">
        <TableContainer component={Paper} className="min-w-full -ml-2 md:ml-0">
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
          <p className="capitalize text-lg text-gray-500">
            Transaction on cash
          </p>
        </div>
      </div>
    </div>
  )
}

const PurchaseHistory = () => {
  return (
    <div className="my-20 p-6 bg-gray-50 text-2xl">
      <h1>Nedd to show purchase history</h1>
      <h2>comming soon.....</h2>
    </div>
  )
}
