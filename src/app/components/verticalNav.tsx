import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider'

const VerticalNav = () => {
  return (
    <nav className="fixed left-0 top-0 pt-14 h-full bg-white w-64 overflow-y-auto border-r border-gray-200">
      <List>
        <ListItem button>
          <Link href="/purchase">
            <ListItemText primary="Purchase" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href="/sales">
            <ListItemText primary="Sales" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href="/analysis">
            <ListItemText primary="Analysis" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href="/settings">
            <ListItemText primary="Settings" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link href="/feedback">
            <ListItemText primary="Feedback" />
          </Link>
        </ListItem>
      </List>
    </nav>
  )
}

export default VerticalNav
