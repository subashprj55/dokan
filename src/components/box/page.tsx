import React from 'react'
import { IBoxProps } from './types'
import CountUp from 'react-countup'

const Box = ({ title, value, textColor }: IBoxProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-2 capitalize">{title}</h3>
      <CountUp
        end={value}
        duration={1}
        separator=","
        className={`text-3xl font-bold ${textColor}`}
      />
    </div>
  )
}

export default Box
