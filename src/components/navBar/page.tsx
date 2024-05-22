'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { VerticalLinks } from '../verticalNav/data'
import { Button } from '@mui/base'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Avatar, Badge, Divider, Typography } from '@mui/material'
import { TiShoppingCart } from 'react-icons/ti'
import Container from '@/components/containder'
import { INavMobileViewPros } from './types'
import { IoListOutline } from 'react-icons/io5'
import { MdOutlineClose } from 'react-icons/md'
import { lowStockProducts } from './data'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isLogIn, setIsLogIn] = useState<boolean>(true)

  const routerPath = usePathname()
  const LogOutPages = ['/', '/aboutUs', '/signIn', '/login']

  useEffect(() => {
    if (LogOutPages.includes(routerPath)) {
      setIsLogIn(false)
    } else {
      setIsLogIn(true)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      if (scrollTop > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const renderProfiles = () => {
    if (!isLogIn) {
      return (
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/"
              className={`${routerPath === '/' ? 'text-teal-700' : ''}`}
            >
              <p className=" hover:text-lavender-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </p>
            </Link>
            <Link
              href="/aboutUs"
              className={`${routerPath === '/aboutUs' ? 'text-teal-700' : ''}`}
            >
              <p className=" hover:text-lavender-300 px-3 py-2 rounded-md text-sm  font-medium">
                About
              </p>
            </Link>
            <Link
              href="/signIn"
              className={`${
                routerPath === '/signIn'
                  ? 'bg-pink-500 text-white'
                  : 'text-pink-700'
              } border border-pink-200 rounded-xl duration-300 hover:border-pink-600 `}
            >
              <p className="px-3 py-2 rounded-md text-sm  font-medium">
                Sign In
              </p>
            </Link>
            <Link href="/login">
              <p
                className={`${
                  routerPath === '/login'
                    ? 'bg-blue-600 text-white'
                    : 'hover:text-blue-800 '
                } px-3 py-2 text-sm font-medium rounded-xl text-blue-700 border hover:border-blue-800 duration-300`}
              >
                Login
              </p>
            </Link>

            {/* Add more navigation links as needed */}
          </div>
        </div>
      )
    }
    return <LogInNav />
  }

  return (
    <>
      <div className="fixed w-screen z-20 bg-gray-200 md:bg-transparent">
        <nav
          className={`${
            isScrolled ? 'md:bg-gray-200' : 'md:bg-transparant'
          } transition-colors duration-500 ease-in-out `}
        >
          <div className="flex justify-center">
            <div
              className={`max-w-[1500px;] px-[2%] ${
                isLogIn ? '' : 'md:px-[5%]'
              }  w-full`}
            >
              <div className="py-2 flex justify-between md:block">
                <div className="flex justify-between items-center w-full">
                  <div className="flex-shrink-0">
                    <Link href={'/'}>
                      <img
                        className="w-[100px;]  md:w-[130px;] cursor-pointer"
                        src="/images/logo.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  {renderProfiles()}
                </div>
                <div className="-mr-2 flex md:hidden ">
                  <button
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center justify-center px-2 rounded-md focus:outline-none"
                    aria-expanded="false"
                  >
                    {/* Icon when navbar is closed */}
                    <IoListOutline
                      className={`${isOpen ? 'hidden' : 'block'} text-3xl`}
                    />

                    {/* Icon when navbar is open */}
                    <MdOutlineClose
                      className={`${isOpen ? 'block' : 'hidden'} text-3xl`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <NavMobileView
        isNavOpen={isOpen}
        routerPath={routerPath}
        isLogIn={isLogIn}
      />
    </>
  )
}

export default Nav

const LogInNav = () => {
  const [notificationCount, setNotificationCount] = useState<number>(0)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setNotificationCount(0)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    setNotificationCount(lowStockProducts.length)
  }, [lowStockProducts])

  return (
    <div className="flex space-x-4 items-center">
      <h1 className="capitalize text-lg text-gray-600 tracking-wide hidden md:block mr-1">
        ABC suppliers
      </h1>
      <Avatar className="cursor-pointer" src="/images/user.jpg" />
      <Button id="basic-button" onClick={handleClick}>
        <Badge badgeContent={notificationCount} color="info">
          <TiShoppingCart className="text-3xl" />
        </Badge>
      </Button>
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              marginTop: '10px',
              width: '350px',
            },
          }}
        >
          <h3 className="text-lg font-[500] tracking-wide text-gray-500 pl-4 mb-1">
            Low Stock Products
          </h3>

          <Divider />
          {lowStockProducts.map((product) => (
            <MenuItem key={product.id}>
              {product.name} - Quantity: {product.quantity}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  )
}

const NavMobileView = ({
  isNavOpen,
  routerPath,
  isLogIn,
}: INavMobileViewPros) => {
  const renderContent = () => {
    if (!isLogIn)
      return (
        <>
          <Link href="/">
            <p
              className={`hover:text-lavender-300 block px-3 py-2 rounded-md text-lg ${
                routerPath === '/' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              Home
            </p>
          </Link>
          <Link href="/aboutUs">
            <p
              className={` hover:text-lavender-300 block px-3 py-2 rounded-md text-lg ${
                routerPath === '/aboutUs' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              About
            </p>
          </Link>
          <Link href="/signIn">
            <p
              className={` hover:text-lavender-300 block px-3 py-2 rounded-md text-lg ${
                routerPath === '/signIn' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              Sign In
            </p>
          </Link>
          <Link href="/login">
            <p
              className={` hover:text-lavender-300 block px-3 py-2 rounded-md text-lg ${
                routerPath === '/login' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              Login
            </p>
          </Link>
        </>
      )

    return (
      <>
        <div className="mb-1 px-3 ">
          <h1 className="capitalize bg-white py-1 rounded-md text-xl text-center text-gray-600 tracking-wide">
            ABC suppliers
          </h1>
        </div>
        {VerticalLinks.map(({ id, name, link }) => {
          return (
            <Link href={link} key={id}>
              <p
                className={` hover:text-lavender-300 block px-3 py-2 rounded-md text-lg ${
                  routerPath === link ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {name}
              </p>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={`${
        isNavOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden duration-500 w-full h-screen bg-white fixed z-10 top-[50px]`}
    >
      <div className="px-2 pb-3 space-y-1 bg-gray-100 pt-3 h-screen overflow-auto">
        {renderContent()}
      </div>
    </div>
  )
}
