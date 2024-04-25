import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider'

const VerticalLinks = [
  {
    id: 0,
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 1,
    name: 'Quick Shell',
    link: '/',
  },
  {
    id: 2,
    name: 'Sell',
    link: '/',
  },
  {
    id: 3,
    name: 'Purchase',
    link: '/purchase',
  },
  {
    id: 4,
    name: 'Analysis',
    link: '/',
  },
  {
    id: 5,
    name: 'Creadit',
    link: '/',
  },
  {
    id: 6,
    name: 'Setting',
    link: '/',
  },
  {
    id: 7,
    name: 'Feedback',
    link: '/',
  },
]

const VerticalNav = () => {
  return (
    <div className="fixed left-0 top-0 pt-14 h-full bg-white w-64 overflow-y-auto ">
      <nav className="border-r border-gray-200 h-full">
        <List className="pt-0">
          {VerticalLinks.map(({ id, name, link }) => {
            return (
              <div key={id}>
                <Divider />
                <ListItem button>
                  <Link href={link}>
                    <ListItemText className=" capitalize" primary={name} />
                  </Link>
                </ListItem>
              </div>
            )
          })}
        </List>
      </nav>
    </div>
  )
}

export default VerticalNav
