'use client'
import React from 'react'
import Container from '@/components/containder'
import Footer from '@/components/footer'
import Nav from '@/components/navBar/page'

const page = () => {
  return (
    <>
      <Nav />
      <Container>
        <div className="h-screen pt-20">
          <div></div>
          <div className="mt-20 p-10 shadow-md ">
            <div className="block md:flex md:justify-between ">
              <div className="mb-5 md:mb-0">
                <iframe
                  src="https://player.vdocipher.com/v2/?otp=20160313versASE323Xka4FBiRbSHMzus9q8DiuWcG14OCvcBRlbdTWEdzIg8bkR&playbackInfo=eyJ2aWRlb0lkIjoiY2FlZjFkZmQzOWQ1N2E0MGMwY2JmMDVmOGI4NmI4MDcifQ=="
                  className=" h-auto w-[540px;] max-w-full"
                  allowFullScreen
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div>
                <iframe
                  src="https://player.vdocipher.com/v2/?otp=20160313versASE323P3PHwd1NcKKUiEkOYxFCRVTTeQW5dfWmC1hKYw4zHxDg74&playbackInfo=eyJ2aWRlb0lkIjoiNDU5OTY1YTM2ZDVhNDBkOGIzN2JhNmUwYzE5ZGRiMjMifQ=="
                  className="h-auto w-[540px;] max-w-full"
                  allowFullScreen
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default page
