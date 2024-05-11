// ModalPopup.js
import React from 'react'
import { Modal, Button } from '@mui/material'
import { Box } from '@mui/system'
import { MdClose } from 'react-icons/md'
import { IPopUpWindown } from './types'

const PopupWindow = ({
  children,
  popUpModel,
  setPopUpModel,
}: IPopUpWindown) => {
  const handleClose = () => {
    // Check if the click event target is the close button or the submit button
    setPopUpModel(false)
  }

  const handleSubmit = () => {
    setPopUpModel(false)
  }

  return (
    <div>
      <Modal open={popUpModel}>
        <Box className="md:px-8 md:py-5  absolute top-1/2 left-1/2 w-[95%;] md:w-auto bg-white -translate-x-1/2 -translate-y-1/2">
          <Button
            onClick={handleClose}
            className="absolute top-0 md:top-5 -right-2 md:right-5"
          >
            <MdClose className="text-3xl text-gray-500 " />
          </Button>
          {children}
          <div className="flex justify-end">
            <Button
              variant="contained"
              className="my-5 md:mb-0 mr-3 md:mr-0"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default PopupWindow
