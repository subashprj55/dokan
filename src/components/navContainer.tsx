import React from 'react'
import Nav from './navBar/page'
import VerticalNav from './verticalNav/page'

const NavContainer = ({ children }: any) => {
  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <div className="hidden md:block w-[15%]">
          <VerticalNav />
        </div>
        <div className="w-full md:w-[85%] 2xl:max-w-[1200px;]">{children}</div>
      </div>
    </>
  )
}

export default NavContainer
