'use client'
import React, { useState } from 'react'
import {
  Grid,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Paper,
  Table,
  TableHead,
} from '@mui/material'
import Container from '@/components/containder'
import NavContainer from '@/components/navContainer'
import { products } from '@/app/purchase/data'
import Footer from '@/components/footer'
import TransactionTable from '@/components/transactionTable'
import PopupWindow from '@/components/popUpWindow'
import DoTextField from '@/components/DoTextField'
import useQuickSalesStore from '@/store/quickSalesStore'

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

const ProductsInfoSection = () => {
  const productsList = useQuickSalesStore((state) => state.productsList)
  const updateProductsList = useQuickSalesStore(
    (state) => state.updateProductsList
  )
  return (
    <div className="mt-20 ">
      <h2 className="text-xl md:text-2xl font-medium mb-5">
        Products Transaction
      </h2>
      <div className="max-h-[600px] overflow-y-auto">
        <TransactionTable
          productsData={products}
          productsList={productsList}
          updateProductsList={updateProductsList}
        />
      </div>
    </div>
  )
}

const CustomerInformationForm = () => {
  const customerName = useQuickSalesStore((state) => state.customerName)
  const phoneNumber = useQuickSalesStore((state) => state.phoneNumber)
  const updateCustomerName = useQuickSalesStore(
    (state) => state.updateFirstName
  )
  const updatePhoneNumber = useQuickSalesStore(
    (state) => state.updatePhoneNumber
  )

  return (
    <div className="mt-10">
      <h2 className="text-lg md:text-xl font-medium mb-5">
        Customer Information
      </h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DoTextField
            placeholder="Customer Name"
            value={customerName}
            setValue={updateCustomerName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DoTextField
            placeholder="Phone Number"
            value={phoneNumber}
            setValue={updatePhoneNumber}
          />
        </Grid>
      </Grid>
    </div>
  )
}

const PaymentMethodSelection = () => {
  const paymentMethod = useQuickSalesStore((state) => state.paymentMethod)
  const updatePaymentMethod = useQuickSalesStore(
    (state) => state.updatePaymentMethod
  )
  const phoneNumber = useQuickSalesStore((state) => state.phoneNumber)
  const [popUpModel, setPopUpModel] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handlePaymentMethodChange = (event: any) => {
    updatePaymentMethod(event.target.value)
  }

  const handleSubmit = () => {
    if (!paymentMethod) {
      setErrorMessage('Please select a payment method')
      return
    }
    if (paymentMethod === 'credit' && !phoneNumber) {
      setErrorMessage('Please enter user phone number on credit teansation')
      return
    }
    setErrorMessage('')
    setPopUpModel(true)
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
        <p className="text-rose-500">{errorMessage}</p>
      </div>
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
  const customerName = useQuickSalesStore((state) => state.customerName)
  const phoneNumber = useQuickSalesStore((state) => state.phoneNumber)
  const ProductsList = useQuickSalesStore((state) => state.productsList)

  return (
    <div className="p-2 md:p-4 w-full m-2 md:min-w-[500px;]">
      <h1>
        <span className="text-xl font-semibold">Customer Name </span>:{' '}
        {customerName}
      </h1>
      <h2>
        <span className="text-lg">Phone Number </span>: {phoneNumber}
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
              {ProductsList.map((product, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.total}</TableCell>
                  </TableRow>
                )
              })}
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
