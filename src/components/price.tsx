import React from 'react'

const PriceDetails = ({ time, color, price, bgColor }: any) => {
  return (
    <>
      <div
        className={`bg-${bgColor}-100 rounded-lg p-6 md:hover:scale-105 duration-300 cursor-pointer relative group`}
      >
        <h3 className="text-xl font-semibold mb-4">For {time}</h3>
        <p className="text-lg mb-4">- Inventory Management</p>
        <p className="text-lg mb-4">- Sales Tracking</p>
        <p className="text-lg mb-4">- Limited Support</p>
        <button
          className={`text-lg py-2 px-3 mt-10 bg-${color}-300 rounded-lg md:group-hover:hidden duration-300`}
        >
          {' '}
          Rs {price}
        </button>
        <button
          className={`text-lg text-center py-2 px-3 mt-10 rounded-lg group-hover:bg-${color}-400 hidden  md:group-hover:inline`}
        >
          {' '}
          Buy Now
        </button>
      </div>
    </>
  )
}

export default PriceDetails
