'use client'
import React from 'react'
import { Button, List, ListItem, ListItemText } from '@mui/material'
import Container from '@/components/container'
import NavContainer from '@/components/navContainer'
import ModalPopup from '@/components/popUpWindow/popUpModel'
import ProductTable from '@/components/table'
import { products } from './data'
import { Paper, Typography, Grid, TextField } from '@mui/material'
import TransactionTable from '@/components/transactionTable'

const PurchaseItem = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <PurchasePage />
          {/* <ModalPopup /> */}
          <SupplierInformation />
          <TransactionTable productsData={products} />
          <OrderSummary />
          <ConfirmationSection />
          <PurchaseHistory />
        </Container>
      </NavContainer>
    </>
  )
}

export default PurchaseItem

const PurchasePage: React.FC = () => {
  const handleOpenModal = () => {
    //    .....
  }

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Purchase Page</h1>
      <div className="flex justify-end mb-4">
        <Button variant="contained" onClick={() => handleOpenModal()}>
          Add Item
        </Button>
      </div>
      <ProductTable products={products} />
    </div>
  )
}

const SupplierInformation = () => {
  return (
    <Paper elevation={3} className="p-6 rounded-lg">
      <Typography variant="h6" gutterBottom>
        Supplier Information
      </Typography>
      <Grid container spacing={2}>
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
            multiline
            rows={3}
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
    </Paper>
  )
}

const sampleProducts = [
  { id: 1, name: 'Product A', price: 10.99, quantity: 2 },
  { id: 2, name: 'Product B', price: 15.99, quantity: 1 },
  { id: 3, name: 'Product C', price: 8.49, quantity: 3 },
  // Add more products as needed
]

const OrderSummary = () => {
  // Calculate total price
  const totalPrice = sampleProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )

  return (
    <Paper elevation={3} className="p-6 rounded-lg mt-4">
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List>
        {products.map((product, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${product.name} x ${product.quantity}`}
              secondary={`$${(product.price * product.quantity).toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1" className="mt-4">
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
    </Paper>
  )
}

const customerInfo = {
  name: 'John Doe',
  address: '123 Main Street',
  contactNumber: '+1234567890',
}

const sampleProds = [
  { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
  { id: 2, name: 'Product 2', price: 15.99, quantity: 1 },
  { id: 3, name: 'Product 3', price: 5.99, quantity: 3 },
]

const paymentMethod = 'Credit Card'

const calculateTotalAmount = (products: any) => {
  return products.reduce((total: any, product: any) => {
    return total + product.price * product.quantity
  }, 0)
}

const totalAmount = calculateTotalAmount(sampleProds)

const ConfirmationSection = () => {
  return (
    <div>
      <h2>Confirmation</h2>
      <div>
        <h3>Customer Information</h3>
        <p>Name: {customerInfo.name}</p>
        <p>Address: {customerInfo.address}</p>
        <p>Contact Number: {customerInfo.contactNumber}</p>
      </div>
      <div>
        <h3>Products</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} - Quantity: {product.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Payment Method</h3>
        <p>{paymentMethod}</p>
      </div>
      <div>
        <h3>Total Amount</h3>
        <p>${totalAmount}</p>
      </div>
      {/* Add any other relevant information or actions here */}
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
