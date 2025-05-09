import useGetPurchaseHistory from '@/hooks/useGetPurchaseHistory'
import { IItem, IPurchase } from './types'
import {
  Card,
  CardContent,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import toast from 'react-hot-toast'

const PurchaseHistory = () => {
  const { data: purchases, isPending, error } = useGetPurchaseHistory()
  if (isPending) {
    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={200} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {toast.error('Unable to get purchase history. please try again.')}
        <Skeleton animation={false} variant="rounded" height={200} />
        <Skeleton animation={false} variant="rounded" height={200} />
      </div>
    )
  }

  if (purchases.length === 0) {
    return (
      <>
        <h1 className="text-lg">Not any data found..</h1>
      </>
    )
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {purchases?.map((purchase: IPurchase) => (
          <Card key={purchase.id} className="shadow-lg rounded-2xl">
            <CardContent>
              <Typography variant="h6" className="mb-2 font-bold capitalize">
                Supplier: {purchase?.supplier?.name}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                📆 {new Date(purchase.createdAt).toLocaleDateString('en-GB')}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                📞 {purchase.supplier.phoneNumber || 'Not available'}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mb-4">
                🌏 {purchase.supplier.address || 'Not available'}
              </Typography>

              <TableContainer
                component={Paper}
                className="shadow-md rounded-lg"
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="font-bold">Item</TableCell>
                      <TableCell className="font-bold">Quantity</TableCell>
                      <TableCell className="font-bold">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {purchase.items.map((item: IItem) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>Rs. {item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography
                variant="h6"
                className="mt-4 font-bold text-right text-blue-600"
              >
                Total: Rs. {purchase.totalCash}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default PurchaseHistory
