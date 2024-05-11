'use client'
import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { data } from './data'
import NavContainer from '@/components/navContainer'
import Container from '@/components/containder/container'
import Footer from '@/components/footer'
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <ChartsAndGraphs />
          <ProfitabilityAnalysis />
          <SupplierPerformance />
          <ForecastingAndPredictiveAnalytics />
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

const ProfitabilityAnalysis = () => {
  // Sample profitability data, replace with actual data from your backend
  const profitabilityData = [
    { month: 'January', revenue: 5000, expenses: 3000 },
    { month: 'February', revenue: 6000, expenses: 3500 },
    { month: 'March', revenue: 7000, expenses: 4000 },
    // Add more data points as needed
  ]

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Profitability Analysis</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Revenue ($)</TableCell>
              <TableCell>Expenses ($)</TableCell>
              <TableCell>Profit ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profitabilityData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.month}</TableCell>
                <TableCell>{data.revenue}</TableCell>
                <TableCell>{data.expenses}</TableCell>
                <TableCell>{data.revenue - data.expenses}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const SupplierPerformance = () => {
  // Sample supplier performance data, replace with actual data from your backend
  const supplierPerformanceData = [
    { supplier: 'Supplier A', totalOrders: 20, totalAmount: 5000 },
    { supplier: 'Supplier B', totalOrders: 15, totalAmount: 4000 },
    { supplier: 'Supplier C', totalOrders: 25, totalAmount: 6000 },
    // Add more data points as needed
  ]

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Supplier Performance</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Supplier</TableCell>
              <TableCell>Total Orders</TableCell>
              <TableCell>Total Amount ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supplierPerformanceData.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.supplier}</TableCell>
                <TableCell>{data.totalOrders}</TableCell>
                <TableCell>{data.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const sampleData = [
  { name: 'Jan', sales: 1000, predictedSales: 1100 },
  { name: 'Feb', sales: 1200, predictedSales: 1250 },
  { name: 'Mar', sales: 1500, predictedSales: 1400 },
  { name: 'Apr', sales: 1300, predictedSales: 1350 },
  { name: 'May', sales: 1600, predictedSales: 1550 },
  { name: 'Jun', sales: 1800, predictedSales: 1700 },
]

const ForecastingAndPredictiveAnalytics = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Forecasting and Predictive Analytics
      </h2>
      <Paper elevation={3} className="p-6">
        <Typography variant="body1">
          This section provides insights into future sales trends and patterns
          using advanced analytics and predictive modeling techniques. Utilize
          historical sales data to forecast future demand, identify potential
          risks or opportunities, and make data-driven decisions to optimize
          inventory management and maximize profitability.
        </Typography>

        <div className="mt-8">
          <Typography variant="h6" gutterBottom>
            Predicted vs Actual Sales
          </Typography>
          <LineChart width={600} height={300} data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              name="Actual Sales"
              stroke="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="predictedSales"
              name="Predicted Sales"
              stroke="#82ca9d"
            />
          </LineChart>
        </div>
      </Paper>
    </div>
  )
}
