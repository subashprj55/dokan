import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider'
import { usePathname } from 'next/navigation'
import { VerticalLinks } from './data'

const VerticalNav = () => {
  const pathName = usePathname()
  return (
    <div className="fixed left-0 2xl:left-auto 2xl:shadow-md top-16 pt-1 h-full bg-white w-[inherit] overflow-y-auto ">
      <nav className="border-r border-gray-200 h-full">
        <List className="pt-0">
          {VerticalLinks.map(({ id, name, link, icon: Icon }) => {
            return (
              <div key={id}>
                <Divider />
                <Link href={link}>
                  <ListItem
                    button
                    className={`${
                      pathName === link
                        ? 'bg-teal-500 hover:bg-teal-600 text-white'
                        : 'hover:bg-teal-600 hover:text-white'
                    }`}
                  >
                    <Icon className="text-xl mr-2" />
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
