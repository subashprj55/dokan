import React from 'react'
import { IPricePlanDetailsProps } from './types'

const PricePlanDetails = ({
  time,
  color,
  price,
  bgCol,
  hoverBg,
}: IPricePlanDetailsProps) => {
  return (
    <>
      <div
        data-aos="fade-up"
        className={`${bgCol} rounded-lg p-6 lg:hover:scale-105 duration-300 cursor-pointer relative group`}
      >
        <h3 className="text-xl font-semibold mb-4">For {time}</h3>
        <p className="md:text-lg mb-4">- Inventory Management</p>
        <p className="md:text-lg mb-4">- Sales Tracking</p>
        <p className="md:text-lg mb-4">- Limited Support</p>
        <button
          className={`text-lg py-2 px-3 mt-10 ${color} rounded-lg md:group-hover:hidden duration-300`}
        >
          {' '}
          Rs {price}
        </button>
        <button
          className={`${hoverBg} text-lg text-center py-2 px-3 mt-10 rounded-lg hidden  md:group-hover:inline `}
        >
          {' '}
          Buy Now
        </button>
      </div>
    </>
  )
}

export default PricePlanDetails
