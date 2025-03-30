'use client'
import Container from '@/components/containder'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
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
  // lowStockProducts,
  // recentActivityData,
  // todayData,
} from './data'
import Box from '@/components/box/page'
import AllStockTable from '@/components/allProductsTable'
import { useEffect, useState } from 'react'
import useTodayRecord from '@/hooks/useGetTodayRecord'
import { format } from 'date-fns'
import useGetLowStock from '@/hooks/useGetLowStock'
import useGetTransactionsByHour from '@/hooks/useGetTransactionsByHour'

const Dashboard = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <SummaryWidgets />
          <DashboardCharts />
          <RecentActivity />
          <LowStockProducts />
          <AllStockTable />
          <InventoryOverview />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default Dashboard

const SummaryWidgets = () => {
  const { data, isPending, error } = useTodayRecord()

  const uniqueCustomers = new Set(data?.map((sale: any) => sale.customer.name))
    .size

  const totalTransaction = data?.reduce(
    (sum: number, sale: any) => sum + sale.totalCash,
    0
  )

  const totalItemsSold = data?.reduce(
    (sum: number, sale: any) =>
      sum +
      sale.items.reduce(
        (itemSum: number, item: any) => itemSum + item.quantity,
        0
      ),
    0
  )

  const numberOfTransaction = data ? data.length : 0

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 pt-20">
        Today's Transaction
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        <Box
          title="Total Customers"
          textColor={'text-blue-500'}
          value={uniqueCustomers}
        />
        <Box
          title="Total Transactions"
          textColor={'text-green-500'}
          value={totalTransaction}
        />
        <Box
          title="Total Sold Items"
          textColor={'text-yellow-500'}
          value={totalItemsSold}
        />
        <Box
          title="Number of Transactions"
          textColor={'text-pink-500'}
          value={numberOfTransaction}
        />
      </div>
    </>
  )
}

const RecentActivity = () => {
  const { data, isPending, error } = useTodayRecord()
  const transactionOn = 'cash'

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-20">
      <Typography className="text-xl md:text-2xl" gutterBottom>
        Recent Activity
      </Typography>
      <Divider />
      <div className="overflow-y-auto max-h-[450px;] ">
        <List>
          {data?.map((transaction: any) => {
            return (
              <ListItem
                key={transaction.id}
                className="cursor-pointer hover:bg-gray-50"
              >
                <ListItemIcon>
                  <FaCheckCircle
                    className={`${
                      transactionOn === 'cash'
                        ? 'text-green-500'
                        : 'text-blue-500'
                    }`}
                  />
                </ListItemIcon>
                <ListItemText
                  className="capitalize"
                  primary={`${transaction.customer.name} On ${transactionOn} Rs ${transaction.totalCash}`}
                  secondary={format(
                    new Date(transaction.createdAt),
                    'yyyy-MM-dd hh:mm a'
                  )}
                />
              </ListItem>
            )
          })}
        </List>
      </div>
    </div>
  )
}

const DashboardCharts = () => {
  const { data, isPending, error } = useGetTransactionsByHour()
  let filledData = []
  // Convert timestamps to Date objects and sort them (if not already sorted)
  if (data && data.length > 0) {
    data.sort(
      (a: any, b: any) =>
        new Date(a.hour).getTime() - new Date(b.hour).getTime()
    )

    const startTime = new Date(data[0].hour)
    const endTime = new Date(data[data.length - 1].hour)

    // Create a map of existing data for quick lookup
    const transactionMap = new Map(
      data.map((t: any) => [new Date(t.hour).getTime(), t.total_cash])
    )

    // Generate all hourly timestamps between startTime and endTime

    for (
      let time = new Date(startTime);
      time <= endTime;
      time.setHours(time.getHours() + 1)
    ) {
      const timeKey = new Date(time).getTime()
      filledData.push({
        name: format(new Date(time).toISOString(), 'h a'),
        value: transactionMap.has(timeKey) ? transactionMap.get(timeKey) : 0,
      })
    }
  }

  return (
    <div className="mt-20  md:-ml-5">
      <Chart data={filledData} />
    </div>
  )
}

const LowStockProducts = () => {
  const { data, error, isPending } = useGetLowStock()

  return (
    <div className="mt-20">
      <Typography
        className="text-xl md:text-2xl font-semibold pb-5"
        gutterBottom
      >
        Low Stock Products
      </Typography>
      <div className="pb-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-h-[500px] overflow-y-auto">
        {data?.map((stock: any) => (
          <Card key={stock.id} className="shadow-lg md:hover:shadow-2xl">
            <CardContent>
              <div className="flex items-center mb-2">
                <FaExclamationCircle
                  className={`${
                    stock.quantity === 0 ? 'text-red-500 ' : 'text-yellow-500 '
                  }mr-2`}
                />
                <Typography className="capitalize" variant="h6">
                  {stock.name}
                </Typography>
              </div>
              <Divider className="my-2" />
              <Typography
                variant="body1"
                className={`${stock.quantity === 0 ? 'text-red-600 ' : ''}`}
              >
                Current Stock Level: {stock.quantity}
              </Typography>
              <Typography variant="body1">Price: {stock.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
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
