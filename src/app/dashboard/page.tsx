'use client'
import React, { useEffect, useState } from 'react'
import ActivityFeed from '../components/activity'
import Chart from '../components/chart'
import Container from '../components/container'
import DataTable from '../components/dataTable'
import Footer from '../components/footer'
import Nav from '../components/nav'
import { chartData, columns, data, notifications, products } from './data'

const Dashboard = () => {
  return (
    <>
      <Nav />
      <Container>
        <SummaryWidgets />
        <InventoryOverview />
        <ProductListing />
        <SearchFilterSection />
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

const InventoryOverview = () => {
  // Sample inventory data (replace with actual data)
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Apples', quantity: 100, category: 'Fruits' },
    { id: 2, name: 'Bananas', quantity: 80, category: 'Fruits' },
    { id: 3, name: 'Milk', quantity: 50, category: 'Dairy' },
    // Add more products as needed
  ])

  // Calculate total number of products
  const totalProducts = inventory.length

  // Calculate total quantity of all products
  const totalQuantity = inventory.reduce(
    (total, product) => total + product.quantity,
    0
  )

  // Calculate number of low-stock products (quantity less than 10)
  const lowStockProducts = inventory.filter(
    (product) => product.quantity < 10
  ).length

  useEffect(() => {
    // Fetch inventory data from API or database
    // Example: fetchInventoryData().then(data => setInventory(data));
  }, []) // Empty dependency array ensures useEffect only runs once on component mount

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Inventory Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg bg-blue-100">
          <h3 className="text-lg font-semibold mb-2">Total Products</h3>
          <p className="text-3xl font-bold">{totalProducts}</p>
        </div>
        <div className="border p-4 rounded-lg bg-green-100">
          <h3 className="text-lg font-semibold mb-2">Total Quantity</h3>
          <p className="text-3xl font-bold">{totalQuantity}</p>
        </div>
        <div className="border p-4 rounded-lg bg-yellow-100">
          <h3 className="text-lg font-semibold mb-2">Low-Stock Products</h3>
          <p className="text-3xl font-bold">{lowStockProducts}</p>
        </div>
      </div>
    </div>
  )
}

const ProductListing = () => {
  // Sample product data

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-20">
      <h2 className="text-2xl font-semibold mb-4">Product Listing</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {product.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {product.quantity}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {product.category}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const SearchFilterSection = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Apples', category: 'Fruits' },
    { id: 2, name: 'Bananas', category: 'Fruits' },
    { id: 3, name: 'Milk', category: 'Dairy' },
    // Add more products as needed
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleSearch = (e: any) => {
    const term = e.target.value
    setSearchTerm(term)
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-20">
      <h2 className="text-2xl font-semibold mb-4">Search and Filter</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Filtered Products</h3>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <li key={product.id} className="py-2">
                {product.name} - {product.category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
