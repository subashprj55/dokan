'use client'
import React, { useState } from 'react'
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import Container from '@/components/containder'
import NavContainer from '@/components/navContainer'
import { Paper, Grid } from '@mui/material'
import AllStockTable from '@/components/allProductsTable'
import NewSupplier from './newSupplier'
import useGetAllSuppliers from '@/hooks/useGetAllSuppliers'
import FormProvider from '@/hook-form/FormProvider'
import { useFieldArray, useForm } from 'react-hook-form'
import DokTextField from '@/hook-form/DokTextField'
import { DokSelect } from '@/hook-form/DokSelect'
import * as yup from 'yup'
import { IFormData } from './types'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaTrash } from 'react-icons/fa'
import ConfirmDialogComponent from './confirmDialogComponent'
import toast from 'react-hot-toast'
import PurchaseHistory from './PurchaseHistory'

const PurchaseItem = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <AllStockTable />
          <SupplierInformation />
          <PurchaseHistorySection />
        </Container>
      </NavContainer>
    </>
  )
}

export default PurchaseItem

const SupplierInformation = () => {
  const [isPopupWindowOpen, setIsPopupWindowOpen] = useState<boolean>(false)

  const [confirmPopup, setConfirmPopup] = useState<boolean>(false)

  const { data: Suppliers, error } = useGetAllSuppliers()

  // yup validation schema
  const NewPurchaseSchema = yup.object().shape({
    supplier: yup
      .number()
      .moreThan(0, 'Please select a supplier')
      .required('Please select a supplier'),
    stock: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required('please enter product name'),
          quantity: yup
            .number()
            .moreThan(0, 'Please inter valid number')
            .transform((value, originalValue) =>
              String(originalValue).trim() === '' ? undefined : value
            )
            .typeError('Please enter a valid quantity')
            .required('Please enter quantity'),
          price: yup
            .number()
            .moreThan(0, 'Please inter valid number')
            .transform((value, originalValue) =>
              String(originalValue).trim() === '' ? undefined : value
            )
            .typeError('Please enter a valid price')
            .required('Please enter price'),
        })
      )
      .min(1, 'Stock is required')
      .default([{ name: '', quantity: 0, price: 0 }]),
  })

  const defaultValues = {
    supplier: 0,
    stock: [{ name: '', quantity: 0, price: 0 }],
  }

  const [formData, setFormData] = useState<IFormData>(defaultValues)

  const methods = useForm<IFormData>({
    resolver: yupResolver(NewPurchaseSchema),
    defaultValues,
  })

  const { watch, handleSubmit, control, reset } = methods

  const value = watch()

  const { fields, append, remove } = useFieldArray({ control, name: 'stock' })

  const handleAddStockOption = () => {
    append({
      name: '',
      quantity: 0,
      price: 0,
    })
  }

  const handleRemoveStockOption = (index: number) => {
    remove(index)
  }

  const totalPrice = value.stock.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const findRowTotal = (index: number) => {
    const price = value.stock[index].price
    const quantity = value.stock[index].quantity
    return price * quantity
  }

  const onSubmit = (data: IFormData) => {
    setFormData(data)
    setConfirmPopup(true)
  }

  return (
    <>
      {error &&
        toast.error(
          'An error occurred to get supplier information. Please try again later.'
        )}
      <NewSupplier open={isPopupWindowOpen} setOpen={setIsPopupWindowOpen} />
      <ConfirmDialogComponent
        open={confirmPopup}
        setOpen={setConfirmPopup}
        formData={formData}
        totalPrice={totalPrice}
        suppliers={Suppliers}
        reset={reset}
      />
      <Box className="mt-10 md:mt-20 p-6 rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-2">Supplier Information</h2>
          <Button
            onClick={() => setIsPopupWindowOpen(true)}
            variant="contained"
          >
            Add new Supplier
          </Button>
        </div>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} className="mt-2">
            <Grid item xs={12} sm={6}>
              <DokSelect native name="supplier" label="Suppliers">
                <option value="" />
                {Suppliers?.map(({ id, name }: any) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
              </DokSelect>
            </Grid>
          </Grid>
          <div className="my-6">
            <h2 className="text-lg font-semibold">Purchase Items Lists</h2>
            <div>
              <TableContainer
                component={Paper}
                className="min-w-full shadow-none"
              >
                <div className="overflow-auto">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fields.map((field, index) => (
                        <TableRow key={field.id}>
                          <TableCell>
                            <DokTextField
                              name={`stock[${index}].name`}
                              label={'product name'}
                            />
                          </TableCell>
                          <TableCell>
                            <DokTextField
                              name={`stock[${index}].quantity`}
                              label={'quantity'}
                            />
                          </TableCell>
                          {/* price */}
                          <TableCell>
                            <DokTextField
                              name={`stock[${index}].price`}
                              label={'price'}
                            />
                          </TableCell>
                          {/* row total price */}
                          <TableCell>Rs {findRowTotal(index)}</TableCell>
                          <TableCell>
                            <Button
                              onClick={() => handleRemoveStockOption(index)}
                            >
                              <FaTrash className="text-pink-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-3 px-3 flex justify-between items-center">
                  <Button
                    className="text-yellow-700"
                    onClick={handleAddStockOption}
                  >
                    Add Product
                  </Button>
                  <p>Total: Rs {totalPrice.toFixed(2)}</p>
                </div>
              </TableContainer>
            </div>
          </div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </FormProvider>
      </Box>
    </>
  )
}

const PurchaseHistorySection = () => {
  return (
    <div className="my-20 p-6 bg-gray-50 text-2xl">
      <h1 className="text-lg font-semibold">Purchase history</h1>
      <PurchaseHistory />
    </div>
  )
}
