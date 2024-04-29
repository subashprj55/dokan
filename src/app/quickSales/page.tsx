'use client'
import React from 'react'
import { Button } from '@mui/material'
import Container from '@/components/container'
import NavContainer from '@/components/navContainer'
import ProductTable from '@/components/table'
import { products } from '@/app/purchase/data'
import Footer from '@/components/footer'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <QuickSell />
        </Container>
        <Footer />
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
