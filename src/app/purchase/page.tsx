'use client'
import React from 'react'
import { Button } from '@mui/material'
import Container from '@/components/container'
import NavContainer from '@/components/navContainer'
import ModalPopup from '@/components/popUpModel'
import ProductTable from '@/components/table'
import { products } from './data'

const PurchaseItem = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <PurchasePage />
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
