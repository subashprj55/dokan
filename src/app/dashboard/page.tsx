'use client'
import React, { useEffect, useState } from 'react'
import Container from '../components/container'
import Footer from '../components/footer'
import NavContainer from '../components/navContainer'
import ProductTable from '../components/table'
import { products } from '../purchase/data'
import { PieChart, Pie, Cell } from 'recharts'
import { Tooltip, Legend, ResponsiveContainer } from 'recharts'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material'
import { FaCheckCircle } from 'react-icons/fa'
import PiChart from '../components/PiChart'

const Dashboard = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <SummaryWidgets />
          <RecentActivity />
          <ProductTable products={products} />
          <PieChartSection />
          <InventoryOverview />
          <HelpSupportSection />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default Dashboard

const SummaryWidgets = () => {
  // Example data for summary widgets
  const [totalCustomer, setTotalCostomer] = useState(324)
  const [totalUsers, setTotalUsers] = useState(10000)
  const [totalOrders, setTotalOrders] = useState(8000)
  const [totalRevenue, setTotalRevenue] = useState(2000)

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6 pt-28">Today's Transation</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Customers</h3>
          <p className="text-3xl font-bold text-blue-500"> {totalCustomer}</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Transation</h3>
          <p className="text-3xl font-bold text-yellow-500">Rs {totalUsers}</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Cash Transation</h3>
          <p className="text-3xl font-bold text-green-500">Rs {totalOrders}</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-2">Credit Transation</h3>
          <p className="text-3xl font-bold text-red-500">Rs {totalRevenue}</p>
        </div>
      </div>
    </>
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
    { id: 2, name: 'Bananas', quantity: 8, category: 'Fruits' },
    { id: 3, name: 'Milk', quantity: 9, category: 'Dairy' },
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
    <div className="bg-white p-6 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-semibold mb-4">Inventory Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg bg-blue-200">
          <h3 className="text-lg font-semibold mb-2">Total Products</h3>
          <p className="text-3xl font-bold">{totalProducts}</p>
        </div>
        <div className="border p-4 rounded-lg bg-green-200">
          <h3 className="text-lg font-semibold mb-2">Total Quantity</h3>
          <p className="text-3xl font-bold">{totalQuantity}</p>
        </div>
        <div className="border p-4 rounded-lg bg-red-300">
          <h3 className="text-lg font-semibold mb-2">Low-Stock Products</h3>
          <p className="text-3xl font-bold">{lowStockProducts}</p>
        </div>
      </div>
    </div>
  )
}

const PieChartSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-semibold mb-4">
        Sales Distribution by Category
      </h2>
      <PiChart />
    </div>
  )
}

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg my-20">
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <FaCheckCircle className="text-blue-500" />
          </ListItemIcon>
          <ListItemText
            primary="Sunita Gautam On Credit Rs 1500"
            secondary="2024-04-15 10:30 AM"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaCheckCircle className="text-green-500" />
          </ListItemIcon>
          <ListItemText
            primary="Suresh Dahal On Cash Rs 300"
            secondary="2024-04-15 10:30 AM"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaCheckCircle className="text-green-500" />
          </ListItemIcon>
          <ListItemText
            primary="Ram Lamichhane On Cash Rs 3500"
            secondary="2024-04-15 10:30 AM"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FaCheckCircle className="text-blue-500" />
          </ListItemIcon>
          <ListItemText
            primary="Hari Gautam On Credit Rs 200"
            secondary="2024-04-15 10:30 AM"
          />
        </ListItem>
        {/* Add more list items as needed */}
      </List>
    </div>
  )
}
