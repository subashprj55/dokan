'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { VerticalLinks } from '../verticalNav/data'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const routerPath = usePathname()

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

  return (
    <>
      <div className="fixed w-screen z-20">
        <nav
          className={`${isScrolled ? 'md:bg-gray-100' : 'bg-transparant'} ${
            isOpen ? ' block' : ' block'
          } transition-colors duration-500 ease-in-out `}
        >
          <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 flex justify-between lg:px-8 md:block bg-gray-200 md:bg-transparent">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0">
                <Link href={'/'}>
                  <img
                    className="w-[100px;]  md:w-[150px;] cursor-pointer"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className={`${routerPath === '/' ? 'text-blue-700' : ''}`}
                  >
                    <p className=" hover:text-lavender-300 px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </p>
                  </Link>
                  <Link
                    href="/aboutUs"
                    className={`${
                      routerPath === '/aboutUs' ? 'text-blue-700' : ''
                    }`}
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
            </div>
            <div className="-mr-2 flex md:hidden ">
              <button
                onClick={toggleNavbar}
                type="button"
                className=" hover:text-lavender-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when navbar is closed */}
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                {/* Icon when navbar is open */}
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu, toggle className based on menu state */}
        </nav>
      </div>
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden duration-500 w-full h-screen bg-white fixed z-10 top-[50px]`}
      >
        <div className="px-2 pb-3 space-y-1 bg-gray-100 pt-3 mx-2 h-screen overflow-auto">
          <Link href="/">
            <p
              className={` hover:text-lavender-300 block px-3 py-2 rounded-md text-lg ${
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
          {VerticalLinks.map(({ id, name, link }) => {
            return (
              <p
                key={id}
                className={` hover:text-lavender-300 block px-3 py-2 rounded-md text-lg ${
                  routerPath === link ? 'bg-blue-500 text-white' : ''
                }`}
              >
                <Link href={link}>{name}</Link>
              </p>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Nav
