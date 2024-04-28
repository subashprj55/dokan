import React, { useEffect } from 'react'
import Link from 'next/link'
import { List, ListItem, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider'
import { usePathname } from 'next/navigation'

const VerticalLinks = [
  {
    id: 0,
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 1,
    name: 'Quick Sales',
    link: '/quickSales',
  },
  {
    id: 2,
    name: 'Sales',
    link: '/sales',
  },
  {
    id: 3,
    name: 'Purchase',
    link: '/purchase',
  },
  {
    id: 4,
    name: 'Analysis',
    link: '/analysis',
  },
  {
    id: 5,
    name: 'Credit',
    link: '/credit',
  },
  {
    id: 6,
    name: 'Setting',
    link: '/setting',
  },
  {
    id: 7,
    name: 'Feedback',
    link: '/feedback',
  },
]

const VerticalNav = () => {
  const pathName = usePathname()
  return (
    <div className="fixed left-0 top-0 pt-14 h-full bg-white w-[inherit] overflow-y-auto ">
      <nav className="border-r border-gray-200 h-full">
        <List className="pt-0">
          {VerticalLinks.map(({ id, name, link }) => {
            return (
              <div key={id}>
                <Divider />
                <Link href={link}>
                  <ListItem
                    onClick={() => console.log(link, pathName)}
                    button
                    className={`${
                      pathName === link
                        ? 'bg-green-500 hover:bg-green-500 text-white'
                        : 'hover:bg-green-500 hover:text-white'
                    }`}
                  >
                    <ListItemText className=" capitalize" primary={name} />
                  </ListItem>
                </Link>
              </div>
            )
          })}
        </List>
      </nav>
    </div>
  )
}

export default VerticalNav
