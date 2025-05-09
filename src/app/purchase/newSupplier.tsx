import PopupWindow from '@/components/popUpWindow'
import { INewSupplier } from './types'
import { useState } from 'react'
import useAddSupplier from '@/hooks/useAddSupplier'
import toast from 'react-hot-toast'

const NewSupplier = ({ open, setOpen }: INewSupplier) => {
  const [user, setUser] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [error, setError] = useState<string>('')

  const { mutate, isPending } = useAddSupplier(
    () => {
      toast.success('new suppliers added successfully')
      setOpen(false)
    },
    () => {
      toast.error('something went wrong. Please try again later')
    }
  )

  const onSubmit = () => {
    if (!user) {
      setError('Please enter customer name')
      return
    }
    setError('')
    const data = {
      user,
      number,
      address,
    }
    mutate(data)
  }

  return (
    <>
      <PopupWindow
        popUpModel={open}
        setPopUpModel={setOpen}
        handleSubmit={onSubmit}
        isLoading={isPending}
      >
        <h2 className="text-xl mb-1">Please enter suppliers info</h2>
        <h2 className="mb-1">Suppliers Name</h2>
        <input
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p className="text-red-500">{error}</p>
        <h2 className="mb-1 mt-2">Contact Number</h2>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <h2 className="mb-1 mt-2">Address</h2>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </PopupWindow>
    </>
  )
}

export default NewSupplier
