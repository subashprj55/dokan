'use client'
import React, { useEffect, useState } from 'react'
import Container from '@/components/container'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import ProductTable from '@/components/table'
import { products } from '@/app/purchase/data'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import PiChart from '@/components/PiChart'
import Chart from '@/components/chart'
import { chartData, recentActivityData, todayData } from './data'
import Box from '@/components/box/page'

const Dashboard = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <SummaryWidgets />
          <DashboardCharts />
          <RecentActivity />
          <LowStockProducts />
          <LowStockTable />
          <AllStockTalbe />
          <PieChartSection />
          {/* <InventoryOverview /> */}
          <HelpSupportSection />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default Dashboard

const SummaryWidgets = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 pt-20">
        Today's Transation
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {todayData.map((data) => {
          return <Box key={data.id} {...data} />
        })}
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
      </ul>
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
      <Typography className="text-2xl md:text-2xl" gutterBottom>
        Recent Activity
      </Typography>
      <Divider />
      <div className="overflow-y-auto max-h-[450px;] ">
        <List>
          {recentActivityData.map(
            ({ id, customerName, transationOn, amount, time }) => {
              return (
                <ListItem key={id} className="cursor-pointer hover:bg-gray-50">
                  <ListItemIcon>
                    <FaCheckCircle
                      className={`${
                        transationOn === 'cash'
                          ? 'text-blue-500'
                          : 'text-green-500'
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${customerName} On ${transationOn} Rs ${amount}`}
                    secondary={time}
                  />
                </ListItem>
              )
            }
          )}
        </List>
      </div>
    </div>
  )
}

const DashboardCharts = () => {
  return (
    <div className="my-20  md:-ml-5">
      <Chart data={chartData} />
    </div>
  )
}

const lowStockProducts = [
  {
    id: 1,
    name: 'Product A',
    currentStockLevel: 5,
    reorderLevel: 10,
    supplier: 'Supplier X',
    lastPurchaseDate: '2024-04-10',
  },
  {
    id: 2,
    name: 'Product B',
    currentStockLevel: 3,
    reorderLevel: 10,
    supplier: 'Supplier Y',
    lastPurchaseDate: '2024-04-05',
  },
  {
    id: 3,
    name: 'Product C',
    currentStockLevel: 2,
    reorderLevel: 10,
    supplier: 'Supplier Z',
    lastPurchaseDate: '2024-03-28',
  },
  // Add more products as needed
]

const LowStockProducts = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg my-20">
      <Typography className="text-2xl md:text-2xl" gutterBottom>
        Low Stock Products
      </Typography>
      <Divider />
      <List>
        {lowStockProducts.map(
          ({
            id,
            name,
            currentStockLevel,
            reorderLevel,
            supplier,
            lastPurchaseDate,
          }) => (
            <ListItem key={id}>
              <ListItemIcon>
                <FaExclamationCircle className="text-yellow-500" />
              </ListItemIcon>
              <ListItemText
                primary={name}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className="text-gray-600"
                    >
                      Current Stock Level: {currentStockLevel} | Reorder Level:{' '}
                      {reorderLevel}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      className="text-gray-600"
                    >
                      Supplier: {supplier} | Last Purchase Date:{' '}
                      {lastPurchaseDate}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          )
        )}
      </List>
    </div>
  )
}

const LowStockTable = () => {
  return (
    <>
      <Typography className="text-xl md:text-2xl" gutterBottom>
        Low Stock Products
      </Typography>

      <TableContainer
        component={Paper}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <Table>
          <TableHead className="bg-gray-50">
            <TableRow>
              <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
                Product Name
              </TableCell>
              <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
                Current Stock Level
              </TableCell>
              <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
                Reorder Level
              </TableCell>
              <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
                Supplier Information
              </TableCell>
              <TableCell className="px-4 py-3 text-left text-gray-600 font-semibold">
                Last Purchase Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white divide-y divide-gray-200">
            {lowStockProducts.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer hover:bg-gray-100"
              >
                <TableCell className="px-4 py-3">{product.name}</TableCell>
                <TableCell className="px-4 py-3 text-red-400">
                  {product.currentStockLevel}
                </TableCell>
                <TableCell className="px-4 py-3">
                  {product.reorderLevel}
                </TableCell>
                <TableCell className="px-4 py-3">{product.supplier}</TableCell>
                <TableCell className="px-4 py-3">
                  {product.lastPurchaseDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

const AllStockTalbe = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        All Products Information
      </h2>
      <ProductTable products={products} />
    </div>
  )
}

// const InventoryOverview = () => {
//   // Sample inventory data (replace with actual data)
//   const [inventory, setInventory] = useState([
//     { id: 1, name: 'Apples', quantity: 100, category: 'Fruits' },
//     { id: 2, name: 'Bananas', quantity: 8, category: 'Fruits' },
//     { id: 3, name: 'Milk', quantity: 9, category: 'Dairy' },
//     // Add more products as needed
//   ])

//   // Calculate total number of products
//   const totalProducts = inventory.length

//   // Calculate total quantity of all products
//   const totalQuantity = inventory.reduce(
//     (total, product) => total + product.quantity,
//     0
//   )

//   // Calculate number of low-stock products (quantity less than 10)
//   const lowStockProducts = inventory.filter(
//     (product) => product.quantity < 10
//   ).length

//   useEffect(() => {
//     // Fetch inventory data from API or database
//     // Example: fetchInventoryData().then(data => setInventory(data));
//   }, []) // Empty dependency array ensures useEffect only runs once on component mount

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mt-20">
//       <h2 className="text-2xl font-semibold mb-4">Inventory Overview</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="border p-4 rounded-lg bg-blue-200">
//           <h3 className="text-lg font-semibold mb-2">Total Products</h3>
//           <p className="text-3xl font-bold">{totalProducts}</p>
//         </div>
//         <div className="border p-4 rounded-lg bg-green-200">
//           <h3 className="text-lg font-semibold mb-2">Total Quantity</h3>
//           <p className="text-3xl font-bold">{totalQuantity}</p>
//         </div>
//         <div className="border p-4 rounded-lg bg-red-300">
//           <h3 className="text-lg font-semibold mb-2">Low-Stock Products</h3>
//           <p className="text-3xl font-bold">{lowStockProducts}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
