'use client'
import React, { useState } from 'react'
import Container from '@/components/containder'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import TransactionTable from '@/components/transactionTable'
import AllStockTable from '@/components/allProductsTable'
import DoTextField from '@/components/DoTextField'
import useSalesStore from '@/store/sales'
import useGetStock from '@/hooks/useGetStock'
import { IConfirmSalesModelSection } from './types'
import PopupWindow from '@/components/popUpWindow'
import useSalesProduct from '@/hooks/useSalesProduct'
import toast from 'react-hot-toast'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <CustomerInformationForm />
          <ProductSection />
          {/* <PaymentMethodSelection /> */}
          <AllStockTable />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default page

const CustomerInformationForm = () => {
  const customerName = useSalesStore((state) => state.customerName)
  const phoneNumber = useSalesStore((state) => state.phoneNumber)
  const gmail = useSalesStore((state) => state.gmail)
  const address = useSalesStore((state) => state.address)
  const updateCustomerName = useSalesStore((state) => state.updateCustomerName)
  const updatePhoneNumber = useSalesStore((state) => state.updatePhoneNumber)
  const updateAddress = useSalesStore((state) => state.updateAddress)
  const UpdateGmail = useSalesStore((state) => state.updateGmail)

  return (
    <div className="bg-white mt-20 rounded-lg ">
      <h2 className="text-2xl font-medium mb-4">Customer Information</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <h3 className="pb-1">Customer Name :</h3>
          <DoTextField
            placeholder={'Customer Name'}
            value={customerName}
            setValue={updateCustomerName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3 className="pb-1">Phone Number :</h3>
          <DoTextField
            placeholder={'Customer Number'}
            value={phoneNumber}
            setValue={updatePhoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3 className="pb-1">Gmail :</h3>
          <DoTextField
            placeholder={'Customer Gmail'}
            value={gmail}
            setValue={UpdateGmail}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h3 className="pb-1">Address :</h3>
          <DoTextField
            placeholder={'Customer Adress'}
            value={address}
            setValue={updateAddress}
          />
        </Grid>
      </Grid>
    </div>
  )
}

const ProductSection = () => {
  const productsList = useSalesStore((state) => state.productsList)

  const updateProductsList = useSalesStore((state) => state.updateProductsList)

  const customerName = useSalesStore((state) => state.customerName)

  const { data } = useGetStock()

  const [errorMessage, setErrorMessage] = useState<string>('')

  const [confirmSalesModel, setConfirmSalesModel] = useState<boolean>(false)

  const handleSubmit = () => {
    //validation
    // check customer name
    if (!customerName) {
      setErrorMessage('Please enter a customer name')
      return
    }
    setErrorMessage('')
    setConfirmSalesModel(true)
  }

  return (
    <div className="mt-10 ">
      <h2 className="text-lg md:text-xl font-medium mb-5">
        Products Transaction
      </h2>
      <div className="max-h-[600px] overflow-y-auto">
        <TransactionTable
          productsData={data}
          productsList={productsList}
          updateProductsList={updateProductsList}
        />
      </div>
      <p className="text-rose-500 mt-5">{errorMessage}</p>
      <div className="my-3">
        <button
          onClick={handleSubmit}
          className=" w-44 tracking-wider mt-4 bg-teal-600 hover:bg-teal-700 text-white text-base py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
      <ConfirmSalesModelSection
        open={confirmSalesModel}
        setOpen={setConfirmSalesModel}
      />
    </div>
  )
}

// const PaymentMethodSelection = () => {
//   const paymentMethod = useSalesStore((state) => state.paymentMethod)
//   const updatePaymentMethod = useSalesStore(
//     (state) => state.updatePaymentMethod
//   )
//   const [popUpModel, setPopUpModel] = useState<boolean>(false)
//   // const [error, setError] = useState<string>('')

//   // const handlePaymentMethodChange = (event: any) => {
//   //   updatePaymentMethod(event.target.value)
//   // }

//   const handleSubmit = () => {
//     setPopUpModel(true)
//   }

//   return (
//     <div className="bg-white mt-10">
//       {/* <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
//       <div className="flex items-center space-x-4">
//         <input
//           type="radio"
//           id="cash"
//           name="payment-method"
//           value="cash"
//           checked={paymentMethod === 'cash'}
//           onChange={handlePaymentMethodChange}
//           className="form-radio h-5 w-5 text-blue-600"
//         />
//         <label htmlFor="cash" className="text-lg text-gray-700">
//           Cash
//         </label>
//       </div>
//       <div className="flex items-center space-x-4">
//         <input
//           type="radio"
//           id="credit"
//           name="payment-method"
//           value="credit"
//           checked={paymentMethod === 'credit'}
//           onChange={handlePaymentMethodChange}
//           className="form-radio h-5 w-5 text-blue-600"
//         />
//         <label htmlFor="credit" className="text-lg text-gray-700">
//           Credit
//         </label>
//       </div>
//       <div className="mt-5">
//         <p className="text-rose-500">{error}</p>
//       </div> */}
//       <div className="my-3">
//         <button
//           onClick={handleSubmit}
//           className=" w-44 tracking-wider mt-4 bg-teal-600 hover:bg-teal-700 text-white text-base py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//       {/* <PopupWindow popUpModel={popUpModel} setPopUpModel={setPopUpModel}>
//         <QuickSalesSubmitSection />
//       </PopupWindow> */}
//     </div>
//   )
// }

const ConfirmSalesModelSection = ({
  open,
  setOpen,
}: IConfirmSalesModelSection) => {
  const productsList = useSalesStore((state) => state.productsList)
  const customerName = useSalesStore((state) => state.customerName)
  const phoneNumber = useSalesStore((state) => state.phoneNumber)
  const gmail = useSalesStore((state) => state.gmail)
  const address = useSalesStore((state) => state.address)
  const totalPrice = useSalesStore((state) => state.totalPrice)

  const { mutate, isPending } = useSalesProduct(
    () => {
      setOpen(false)
      toast.success('success')
    },
    () => {
      toast.error('Something went wrong. Please try again')
    }
  )

  const handleSubmit = () => {
    const data = {
      customer: customerName,
      number: phoneNumber,
      gmail: gmail ? gmail : null,
      address,
      stock: productsList,
      totalPrice,
    }
    mutate(data)
  }
  return (
    <>
      <PopupWindow
        popUpModel={open}
        setPopUpModel={setOpen}
        handleSubmit={handleSubmit}
        isLoading={isPending}
      >
        <div className="p-2 md:p-4 w-full m-2 md:min-w-[500px;]">
          <h1 className="text-xl font-medium mb-1">
            Customer Name : {customerName}
          </h1>
          {phoneNumber && (
            <h2>
              <span className="text-lg">Phone Number </span> : {phoneNumber}
            </h2>
          )}
          {gmail && (
            <h2>
              <span className="text-lg">Gmail </span>: {gmail}
            </h2>
          )}
          {address && (
            <h2>
              <span className="text-lg capitalize">Address </span>: {address}
            </h2>
          )}

          <h1 className="text-xl font-semibold mt-5">Products Info</h1>
          <div className="mt-4 ">
            <TableContainer
              component={Paper}
              className="min-w-full -ml-2 md:ml-0"
            >
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
                  {productsList.map((product, index) => {
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
          </div>
        </div>
      </PopupWindow>
    </>
  )
}
