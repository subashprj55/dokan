// ModalPopup.js
import React, { useState } from 'react'
import { Modal, Typography, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { MdClose } from 'react-icons/md'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ModalPopup = () => {
  const [open, setOpen] = React.useState(true)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [expireDate, setExpireDate] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = (event: any) => {
    // Check if the click event target is the close button or the submit button

    setOpen(false)
  }

  const handleSubmit = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} className="border-0">
        <Box sx={style} className="border-0">
          <Button
            onClick={handleClose}
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <MdClose className="text-2xl text-black " />
          </Button>
          <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
          <TextField
            label="Name"
            variant="outlined"
            className="mb-4 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Quantity"
            variant="outlined"
            className="mb-4 w-full"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            label="Price"
            variant="outlined"
            className="mb-4 w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            label="Expire Date"
            variant="outlined"
            className="mb-4 w-full"
            value={expireDate}
            onChange={(e) => setExpireDate(e.target.value)}
          />
          <div className="flex justify-end">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalPopup
