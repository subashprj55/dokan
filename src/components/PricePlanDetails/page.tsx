import React from 'react'
import { Card, CardContent, Button } from '@mui/material'
import { IPricePlanDetailsProps } from './types'

const PricePlanDetails = ({
  time,
  color,
  price,
  bgCol,
  hoverBg,
}: IPricePlanDetailsProps) => {
  return (
    <Card
      data-aos="fade-up"
      className={`rounded-lg ${bgCol} shadow-md md:hover:shadow-xl duration-300 cursor-pointer relative group `}
    >
      <div className="p-4 pb-14 h-full bg-gradient-to-b from-transparent to-gray-100 hover:from-transparent hover:to-gray-50 transition hover:scale-105 duration-500">
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">For {time}</h3>
          <p className="md:text-lg mb-4">- Sales Tracking</p>
          <p className="md:text-lg mb-4">- Inventory Management</p>
          <p className="md:text-lg mb-4">- Analytics Reporting</p>
          <p className="md:text-lg mb-4">- Limited Support</p>
          <p className="md:text-lg mb-4">- Customer Service</p>

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 ">
            <Button
              className={`text-lg py-2 px-3 mt-10 ${color} rounded-lg md:group-hover:hidden duration-300 text-white `}
            >
              {' '}
              Rs {price}
            </Button>
            <Button
              className={`${hoverBg} text-lg text-center py-2 px-3 mt-10 rounded-lg hidden text-white md:group-hover:inline `}
            >
              {' '}
              Buy Now
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default PricePlanDetails
