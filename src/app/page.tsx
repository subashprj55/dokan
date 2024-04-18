'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Container from './components/container'
import Nav from './components/nav'

export default function Home() {
  return (
    <>
      <Nav />
      <Container>
        <Intro />
        <Futures />
        <AboutUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingPlansSection />
      </Container>
    </>
  )
}

const Intro = () => {
  return (
    <div className="bg-white">
      <div>
        <title>Your Grocery Store Management</title>
        <meta
          name="description"
          content="Welcome to Your Grocery Store Management System"
        />
      </div>

      {/* body contant  start form here*/}
      <div className="pt-48">
        <h1 className="text-3xl md:text-7xl text-center font-bold text-gray-800 mb-4">
          Welcome to Your Grocery Store Management System
        </h1>
        <br />
        <h1 className="text-5xl md:text-8xl text-center font-bold text-gray-600 mb-4">
          DOKAN
        </h1>
        <p className=" text-gray-600 text-center mb-5 text-2xl mt-5 md:mt-14">
          Manage your grocery store efficiently with our user-friendly system.
        </p>
        <div className="flex justify-center gap-3 ">
          <button className="bg-yellow-300 py-2 px-4 rounded-md hover:bg-yellow-400 duration-500">
            Sign Up
          </button>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 duration-500">
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

// Define your images and descriptions

const Futures = () => {
  const imagesData = [
    {
      id: 0,
      imageSrc: '/images/Inventory.jpeg',
      imageDescription: 'Inventory Management',
    },
    {
      id: 1,
      imageSrc: '/images/Sales.webp',
      imageDescription: 'Sales Tracking',
    },
    {
      id: 2,
      imageSrc: '/images/Order.avif',
      imageDescription: 'Order Processing',
    },
    {
      id: 3,
      imageSrc: '/images/Emplyee.jpeg',
      imageDescription: 'Employee Scheduling',
    },
    {
      id: 4,
      imageSrc: '/images/customer.jpeg',
      imageDescription: 'Customer Management',
    },
    {
      id: 5,
      imageSrc: '/images/Inventory.jpeg',
      imageDescription: 'Inventory Management',
    },
    {
      id: 6,
      imageSrc: '/images/Sales.webp',
      imageDescription: 'Sales Tracking',
    },
  ]

  return (
    <div className="mt-20 md:my-20">
      <h1 className="text-2xl text-center md:text-start mb-5 md:overflow-hidden">
        Our grocery store management system offers:-
      </h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-9 md:overflow-scroll">
        {imagesData.map(({ id, imageSrc, imageDescription }) => {
          return (
            <div key={id}>
              {/* image */}
              <div className="w-[300px] h-[200px]">
                <Image
                  alt={imageDescription}
                  src={imageSrc}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              {/* descrition */}
              <p className="mb-2 text-center text-lg my-5">
                {imageDescription}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 mt-10 py-10 md:py-16 mx-[-8%] md:mx-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <Image
              alt={'image'}
              src={'/images/Sales.webp'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="max-w-lg">
            <p className="text-lg mb-4">
              At Dokan, we are dedicated to revolutionizing the way grocery
              stores manage their operations. With a focus on innovation and
              excellence, we strive to provide cutting-edge solutions that
              streamline inventory management, enhance sales tracking, and
              improve customer satisfaction.
            </p>
            <p className="text-lg">
              Our team consists of passionate professionals who are committed to
              delivering exceptional results and exceeding our customers'
              expectations. With a deep understanding of the challenges faced by
              grocery store owners, we work tirelessly to develop and implement
              solutions that drive success and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-16 md:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
            <p className="text-lg">
              Sign up for our grocery store management system by providing your
              basic information. It's quick, easy, and free!
            </p>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Set Up Your Store</h3>
            <p className="text-lg">
              Customize and set up your store according to your preferences. Add
              products, categories, and manage inventory effortlessly.
            </p>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Start Selling</h3>
            <p className="text-lg">
              Once your store is set up, you can start selling your products to
              customers both online and offline. Manage orders, track sales, and
              grow your business effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 mx-[-8%] md:mx-0 py-16 md:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Happy Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg mb-4">
              "I'm amazed by how easy it is to manage my store with this system.
              It has everything I need to stay organized and serve my customers
              better."
            </p>
            <p className="text-gray-500">
              - Emily Johnson, Owner of Fresh Mart
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg mb-4">
              "Switching to this management system was one of the best decisions
              I've made for my business. It's efficient, reliable, and has
              helped me increase my sales."
            </p>
            <p className="text-gray-500">
              - Mark Rodriguez, CEO of Super Grocers
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg mb-4">
              "The support team behind this system is outstanding. They're
              always available to help me with any questions or issues I
              encounter, which gives me peace of mind."
            </p>
            <p className="text-gray-500">
              - Sarah Thompson, Manager of Corner Market
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const PricingPlansSection = () => {
  return (
    <section className="bg-white py-16 md:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-lg mb-4">Ideal for small businesses</p>
            <p className="text-lg mb-4">- Inventory Management</p>
            <p className="text-lg mb-4">- Sales Tracking</p>
            <p className="text-lg mb-4">- Limited Support</p>
            <p className="text-lg">Price: $19.99/month</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-lg mb-4">Ideal for medium-sized businesses</p>
            <p className="text-lg mb-4">- Inventory Management</p>
            <p className="text-lg mb-4">- Sales Tracking</p>
            <p className="text-lg mb-4">- Customer Management</p>
            <p className="text-lg">Price: $39.99/month</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-lg mb-4">Ideal for large businesses</p>
            <p className="text-lg mb-4">- Inventory Management</p>
            <p className="text-lg mb-4">- Sales Tracking</p>
            <p className="text-lg mb-4">- Customer Management</p>
            <p className="text-lg mb-4">- Advanced Analytics</p>
            <p className="text-lg">Price: $79.99/month</p>
          </div>
        </div>
      </div>
    </section>
  )
}
