'use client'
import React, { useState } from 'react'
import Container from '@/components/containder'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import { products } from '@/app/purchase/data'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Card,
  CardContent,
} from '@mui/material'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import Chart from '@/components/chart'
import {
  chartData,
  lowStockProducts,
  recentActivityData,
  todayData,
} from './data'
import Box from '@/components/box/page'
import AllStockTable from '@/components/allProductsTable'
import SearchInput from '@/components/searchInputBox'

const Dashboard = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <SummaryWidgets />
          <DashboardCharts />
          <RecentActivity />
          <LowStockProducts />
          <AllStockTalbe />
          {/* <InventoryOverview /> */}
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
        Today's Transaction
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {todayData.map((data) => {
          return <Box key={data.id} {...data} />
        })}
      </div>
    </>
  )
}

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-20">
      <Typography className="text-xl md:text-2xl" gutterBottom>
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
    <div className="mt-20  md:-ml-5">
      <Chart data={chartData} />
    </div>
  )
}

const LowStockProducts = () => {
  return (
    <div className="mt-20">
      <Typography
        className="text-xl md:text-2xl font-semibold pb-5"
        gutterBottom
      >
        Low Stock Products
      </Typography>
      <div className="pb-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-h-[500px] overflow-y-auto">
        {lowStockProducts.map(
          ({
            id,
            name,
            currentStockLevel,
            reorderLevel,
            supplier,
            lastPurchaseDate,
          }) => (
            <Card key={id} className="shadow-lg md:hover:shadow-2xl">
              <CardContent>
                <div className="flex items-center mb-2">
                  <FaExclamationCircle
                    className={`${
                      currentStockLevel === 0
                        ? 'text-red-500 '
                        : 'text-yellow-500 '
                    }mr-2`}
                  />
                  <Typography variant="h6">{name}</Typography>
                </div>
                <Divider className="my-2" />
                <Typography
                  variant="body1"
                  className={`${
                    currentStockLevel === 0 ? 'text-red-600 ' : ''
                  }`}
                >
                  {' '}
                  Current Stock Level: {currentStockLevel}
                </Typography>
                <Typography variant="body1">
                  Reorder Level: {reorderLevel}
                </Typography>
                <Typography variant="body1">Supplier: {supplier}</Typography>
                <Typography variant="body1">
                  Last Purchase Date: {lastPurchaseDate}
                </Typography>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </div>
  )
}

const AllStockTalbe = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredProducts = products.filter((product) =>
    Object.values(product).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

  return (
    <div className="mt-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          All Products Information
        </h2>
        <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <AllStockTable filteredProducts={filteredProducts} />
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
