'use client'
import React, { useState } from 'react'
import ActivityFeed from '../components/activity'
import Chart from '../components/chart'
import Container from '../components/container'
import DataTable from '../components/dataTable'
import Footer from '../components/footer'
import Nav from '../components/nav'
import { chartData, columns, data, notifications } from './data'

const Dashboard = () => {
  return (
    <>
      <Nav />
      <Container>
        <SummaryWidgets />
        <DashboardDataTables />
        <DashboardCharts />
        <DashboardActivityFeed />
        <ProfileSettingsForm />
        <HelpSupportSection />
        <Footer />
      </Container>
    </>
  )
}

export default Dashboard

const SummaryWidgets = () => {
  // Example data for summary widgets
  const [totalUsers, setTotalUsers] = useState(1000)
  const [totalOrders, setTotalOrders] = useState(500)
  const [totalRevenue, setTotalRevenue] = useState(10000)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-32">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-2">Total Users</h3>
        <p className="text-3xl font-bold text-blue-500">{totalUsers}</p>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
        <p className="text-3xl font-bold text-green-500">{totalOrders}</p>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
        <p className="text-3xl font-bold text-yellow-500">${totalRevenue}</p>
      </div>
    </div>
  )
}

const DashboardDataTables = () => {
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  )
}

const DashboardCharts = () => {
  return (
    <div className="mt-20  -ml-5">
      <Chart data={chartData} />
    </div>
  )
}

const DashboardActivityFeed = () => {
  return (
    <div className="mt-20 ">
      <ActivityFeed notifications={notifications} />
    </div>
  )
}

const ProfileSettingsForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Add logic to update user profile/settings
    console.log('Profile updated:', { fullName, email, password })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

const HelpSupportSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>
      <ul className="space-y-2">
        <li>
          <a href="/faq" className="text-blue-500 hover:underline">
            FAQ
          </a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/docs" className="text-blue-500 hover:underline">
            Documentation
          </a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  )
}
