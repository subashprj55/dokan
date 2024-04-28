'use client'
import React from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Chart from '@/components/chart'
import { data } from './data'
import NavContainer from '@/components/navContainer'
import Container from '@/components/container'
import Footer from '@/components/footer'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <ChartsAndGraphs />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default page

const ChartsAndGraphs = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Sales and Purchases Trends
      </h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="purchases" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
