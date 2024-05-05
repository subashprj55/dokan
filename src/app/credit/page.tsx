'use client'
import React, { useState } from 'react'
import Container from '@/components/container'
import Footer from '@/components/footer'
import NavContainer from '@/components/navContainer'
import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <TotalCreditSection />
          <OwnCreditSection />
          <YearlyCreditTransactionsAnalysis />
        </Container>
        <Footer />
      </NavContainer>
    </>
  )
}

export default page

const TotalCreditSection = () => {
  const totalCredits = [
    { customerId: 1, customerName: 'John Doe', amount: 500 },
    { customerId: 2, customerName: 'Jane Smith', amount: 700 },
    { customerId: 3, customerName: 'Alice Johnson', amount: 300 },
    // Add more sample data as needed
  ]

  return (
    <div className="mt-32">
      <h2 className="text-xl font-semibold mb-4">Total Credits</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Total Credit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totalCredits.map((credit) => (
              <TableRow key={credit.customerId}>
                <TableCell>{credit.customerName}</TableCell>
                <TableCell>${credit.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const OwnCreditSection = () => {
  const ownCredits = [
    {
      supplier: 'Supplier 1',
      remainingCredit: 200,
      lastPurchaseDate: '2024-04-20',
    },
    {
      supplier: 'Supplier 2',
      remainingCredit: 150,
      lastPurchaseDate: '2024-04-18',
    },
    {
      supplier: 'Supplier 1',
      remainingCredit: 200,
      lastPurchaseDate: '2024-04-20',
    },
    {
      supplier: 'Supplier 2',
      remainingCredit: 150,
      lastPurchaseDate: '2024-04-18',
    },
    {
      supplier: 'Supplier 1',
      remainingCredit: 200,
      lastPurchaseDate: '2024-04-20',
    },
    {
      supplier: 'Supplier 2',
      remainingCredit: 150,
      lastPurchaseDate: '2024-04-18',
    },
    // Add more supplier information as needed
  ]

  return (
    <div className="mt-20 ">
      <h2 className="text-xl font-semibold mb-4">Your Credit Information</h2>
      <div className="max-h-[600px] overflow-y-auto">
        {ownCredits.map((credit, index) => (
          <Paper key={index} elevation={3} className="p-6 mb-4">
            <Typography variant="body1" gutterBottom>
              Supplier: {credit.supplier}
            </Typography>
            <Divider className="my-4" />
            <Typography variant="body1" gutterBottom>
              Remaining Credit: ${credit.remainingCredit}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Last Purchase Date: {credit.lastPurchaseDate}
            </Typography>
          </Paper>
        ))}
      </div>
    </div>
  )
}

const yearlyCreditTransactions = [
  {
    month: 'January',
    totalCredit: 1000,
    paidCredit: 700,
    remainingCredit: 300,
  },
  {
    month: 'February',
    totalCredit: 1200,
    paidCredit: 800,
    remainingCredit: 400,
  },
  { month: 'March', totalCredit: 1100, paidCredit: 600, remainingCredit: 500 },
  { month: 'April', totalCredit: 1400, paidCredit: 1000, remainingCredit: 400 },
  { month: 'May', totalCredit: 1500, paidCredit: 1100, remainingCredit: 400 },
  { month: 'June', totalCredit: 1600, paidCredit: 1200, remainingCredit: 400 },
  { month: 'July', totalCredit: 1700, paidCredit: 1300, remainingCredit: 400 },
  {
    month: 'August',
    totalCredit: 1800,
    paidCredit: 1400,
    remainingCredit: 400,
  },
  {
    month: 'September',
    totalCredit: 1900,
    paidCredit: 1500,
    remainingCredit: 400,
  },
  {
    month: 'October',
    totalCredit: 2000,
    paidCredit: 1600,
    remainingCredit: 400,
  },
  {
    month: 'November',
    totalCredit: 2100,
    paidCredit: 1700,
    remainingCredit: 400,
  },
  {
    month: 'December',
    totalCredit: 2200,
    paidCredit: 1800,
    remainingCredit: 400,
  },
]

const YearlyCreditTransactionsAnalysis = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">
        Yearly Credit Transactions Analysis
      </h2>
      <Paper elevation={3} className="p-6">
        <Typography variant="body1">
          This section provides an overview of yearly credit transactions,
          including total credit, paid credit, and remaining credit for each
          month. Visualize the trends and patterns to understand credit
          management and payment behavior over the course of the year.
        </Typography>

        <div className="mt-8">
          <Typography variant="h6" gutterBottom>
            Credit Transactions by Month
          </Typography>
          <AreaChart
            width={600}
            height={300}
            data={yearlyCreditTransactions}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="totalCredit"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="paidCredit"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="remainingCredit"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </div>
      </Paper>
    </div>
  )
}
