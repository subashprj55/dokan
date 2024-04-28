import Container from '@/components/container'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import React from 'react'

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
