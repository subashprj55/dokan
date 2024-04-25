'use client'
import { Button } from '@mui/material'
import React from 'react'
import Container from '../components/container'
import NavContainer from '../components/navContainer'
import ProductTable from '../components/table'
import { products } from '../purchase/data'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <QuickSell />
        </Container>
      </NavContainer>
    </>
  )
}

export default page

const QuickSell = () => {
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
