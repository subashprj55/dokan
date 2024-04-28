'use client'
import Container from '@/components/container'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import React from 'react'

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
