'use client'
import React from 'react'
import Container from '@/components/container'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container></Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default page
