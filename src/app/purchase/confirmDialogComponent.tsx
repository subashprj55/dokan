import PopupWindow from '@/components/popUpWindow'
import { IConfirmDialogComponent } from './types'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import usePurchaseItems from '@/hooks/usePurchaseItems'
import toast from 'react-hot-toast'

const ConfirmDialogComponent = ({
  open,
  setOpen,
  formData,
  totalPrice,
  suppliers,
  reset,
}: IConfirmDialogComponent) => {
  const { isPending, mutate } = usePurchaseItems(
    () => {
      toast.success('New data added successfully')
      reset()
      setOpen(false)
    },
    () => {
      toast.error('There is some went wrong. Please try again')
    }
  )

  const getSupplierName = (id: number) => {
    const supplier = suppliers?.find((item) => item.id === id)
    return supplier ? supplier.name : ''
  }

  const handleSubmit = () => {
    const finalData = {
      ...formData,
      totalPrice,
    }
    mutate(finalData)
  }

  return (
    <>
      <PopupWindow
        popUpModel={open}
        setPopUpModel={setOpen}
        handleSubmit={handleSubmit}
        isLoading={isPending}
      >
        <div className="p-2 md:p-4 w-full m-2 md:min-w-[500px;]">
          <h1 className="text-xl font-medium mb-1 capitalize">
            Suppliers Name : {getSupplierName(formData.supplier)}
          </h1>
          <h1 className="text-xl font-semibold mt-5">Products Info</h1>
          <div className="mt-4 ">
            <TableContainer
              component={Paper}
              className="min-w-full -ml-2 md:ml-0"
            >
              <Table>
                <TableHead>
                  <TableRow className="bg-gray-100">
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {formData.stock.map(({ name, quantity, price }) => {
                    return (
                      <TableRow key={name}>
                        <TableCell>{name}</TableCell>
                        <TableCell>{quantity}</TableCell>
                        <TableCell>{price}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="flex items-center mt-3 gap-2">
            <h3 className="text-lg">Total Price : </h3>
            <p className="font-semibold">{totalPrice}</p>
          </div>
        </div>
      </PopupWindow>
    </>
  )
}

export default ConfirmDialogComponent
