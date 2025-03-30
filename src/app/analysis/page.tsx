'use client'
import React, { useEffect, useState } from 'react'
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
import { data, sampleData } from './data'
import NavContainer from '@/components/navContainer'
import Container from '@/components/containder'
import Footer from '@/components/footer'
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Button,
} from '@mui/material'
import {
  startOfToday,
  endOfToday,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from 'date-fns'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <AnalysisPage />
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
    <div className="bg-white rounded-lg">
      <h2 className="text-2xl font-medium mb-6">Sales and Purchases Trends</h2>
      <div className="w-full p-6 h-80  shadow-lg">
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
    <div className="py-8 mt-10 md:mt-20">
      <h2 className="text-2xl font-medium mb-4">Profitability Analysis</h2>
      <TableContainer component={Paper}>
        <Table className="cursor-pointer">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell>Month</TableCell>
              <TableCell>Revenue ($)</TableCell>
              <TableCell>Expenses ($)</TableCell>
              <TableCell>Profit ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profitabilityData.map((data, index) => (
              <TableRow className="md:hover:bg-gray-50" key={index}>
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
      <h2 className="text-2xl font-medium mb-4">Supplier Performance</h2>
      <TableContainer component={Paper}>
        <Table className="cursor-pointer">
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell>Supplier</TableCell>
              <TableCell>Total Orders</TableCell>
              <TableCell>Total Amount ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supplierPerformanceData.map((data, index) => (
              <TableRow className="md:hover:bg-gray-50" key={index}>
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

const ForecastingAndPredictiveAnalytics = () => {
  return (
    <div className="py-8">
      <Paper elevation={3} className="p-6">
        <h2 className="text-2xl font-medium mb-4">
          Forecasting and Predictive Analytics
        </h2>
        <div className="mt-8">
          <div className="w-full h-80">
            <ResponsiveContainer>
              <LineChart
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                data={sampleData}
              >
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
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="predictedSales"
                  name="Predicted Sales"
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Paper>
    </div>
  )
}

type DateRange = [Date | null, Date | null] | null
type FilterDate = 'today' | 'week' | 'month' | 'custom'

const AnalysisPage = () => {
  const [range, setRange] = useState<DateRange>(null)
  const [dates, setDates] = useState<[Date, Date]>([
    startOfToday(),
    endOfToday(),
  ])
  const [filterDate, setFilterDate] = useState<FilterDate>('today')

  // Handle date range change from DateRangePicker
  const handleDateRangeChange = (value: DateRange) => {
    setRange(value)
    setDates(value)
    setFilterDate('custom')
    if (value === null) {
      handleFilterDateChange('today')
    }
  }

  // Handle filter date change (today, week, month)
  const handleFilterDateChange = (filter: FilterDate) => {
    setFilterDate(filter)
    const today = new Date()
    setRange(null)

    switch (filter) {
      case 'today':
        setDates([startOfToday(), endOfToday()])
        break
      case 'week':
        setDates([startOfWeek(today), endOfWeek(today)])
        break
      case 'month':
        setDates([startOfMonth(today), endOfMonth(today)])
        break
      default:
        break
    }
  }

  // const [value, setValue] = useState<[Date | null, Date | null]>([null, null])

  // Initialize default date range on component mount
  useEffect(() => {
    handleFilterDateChange('today')
  }, [])

  return (
    <div className="mt-20">
      <Grid container spacing={3}>
        <Grid item xs={12} md={10} mb={2} sx={{ display: 'flex', gap: '15px' }}>
          <Button
            variant={filterDate === 'today' ? 'contained' : 'outlined'}
            onClick={() => handleFilterDateChange('today')}
          >
            Today
          </Button>
          <Button
            variant={filterDate === 'week' ? 'contained' : 'outlined'}
            onClick={() => handleFilterDateChange('week')}
          >
            this week
          </Button>
          <Button
            variant={filterDate === 'month' ? 'contained' : 'outlined'}
            onClick={() => handleFilterDateChange('month')}
          >
            this month
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
