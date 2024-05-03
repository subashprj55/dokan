import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider'
import { usePathname } from 'next/navigation'
import { VerticalLinks } from './data'

const VerticalNav = () => {
  const pathName = usePathname()
  return (
    <div className="fixed left-0 top-16 pt-1 h-full bg-white w-[inherit] overflow-y-auto ">
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
