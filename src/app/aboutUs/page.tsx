'use client'
import React from 'react'
import Container from '@/components/containder/container'
import Footer from '@/components/footer'
import Nav from '@/components/navBar/page'

const page = () => {
  return (
    <>
      <Nav />
      <Container>
        <div className="h-screen"></div>
        <Footer />
      </Container>
    </>
  )
}

export default page
