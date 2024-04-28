import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from 'recharts'

const data = [
  { category: 'Electronics', sales: 2000 },
  { category: 'Clothing', sales: 3500 },
  { category: 'Books', sales: 1500 },
  { category: 'Home Decor', sales: 2500 },
  // Add more categories and sales data as needed
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function PiChart() {
  return (
    <>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="sales"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}
