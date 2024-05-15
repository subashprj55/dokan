import { RiDashboardLine } from 'react-icons/ri'
import { AiFillAppstore, AiOutlineDollarCircle } from 'react-icons/ai'
import { VscGraph, VscFeedback } from 'react-icons/vsc'
import { GoCreditCard } from 'react-icons/go'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuTruck } from 'react-icons/lu'
import { BiMoney } from 'react-icons/bi'

export const VerticalLinks = [
  {
    id: 0,
    name: 'Dashboard',
    link: '/dashboard',
    icon: AiFillAppstore,
  },
  {
    id: 1,
    name: 'Quick Sales',
    link: '/quickSales',
    icon: BiMoney,
  },
  {
    id: 2,
    name: 'Sales',
    link: '/sales',
    icon: AiOutlineDollarCircle,
  },
  {
    id: 3,
    name: 'Purchase',
    link: '/purchase',
    icon: LuTruck,
  },
  {
    id: 4,
    name: 'Analysis',
    link: '/analysis',
    icon: VscGraph,
  },
  {
    id: 5,
    name: 'Credit',
    link: '/credit',
    icon: GoCreditCard,
  },
  {
    id: 6,
    name: 'Setting',
    link: '/setting',
    icon: IoSettingsOutline,
  },
  {
    id: 7,
    name: 'Feedback',
    link: '/feedback',
    icon: VscFeedback,
  },
]
