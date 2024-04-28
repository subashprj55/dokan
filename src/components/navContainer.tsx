import React from 'react'
import Nav from './nav'
import VerticalNav from './verticalNav'

const NavContainer = ({ children }: any) => {
  return (
    <>
      <Nav />
      <div className="flex">
        <div className="hidden md:block w-[15%]">
          <VerticalNav />
        </div>
        <div className="w-full md:w-[85%]">{children}</div>
      </div>
    </>
  )
}

export default NavContainer
