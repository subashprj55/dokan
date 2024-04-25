'use client'
import { Modal } from '@mui/base'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Container from '../components/container'
import NavContainer from '../components/navContainer'
import ModalPopup from '../components/popUpModel'
import ProductTable from '../components/Table'
import { products } from './data'

const PurchaseItem = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <PurchasePage />
          <AddItemModal />
          <ModalPopup />
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

const AddItemModal = ({ open = false }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [expireDate, setExpireDate] = useState('')

  const handleSubmit = () => {
    // You can handle form submission here
    // For now, let's just log the form data
    console.log({ name, quantity, price, expireDate })

    //     // Close the modal
    //     onClose()
  }

  return (
    <Modal open={open}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
        <TextField
          label="Name"
          variant="outlined"
          className="mb-4 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          className="mb-4 w-full"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          className="mb-4 w-full"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Expire Date"
          variant="outlined"
          className="mb-4 w-full"
          value={expireDate}
          onChange={(e) => setExpireDate(e.target.value)}
        />
        <div className="flex justify-end">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  )
}
