// ModalPopup.js
import React from 'react'
import { Modal, Button, CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { IPopUpWindown } from './types'

const PopupWindow = ({
  children,
  popUpModel,
  setPopUpModel,
  handleSubmit,
  isLoading,
}: IPopUpWindown) => {
  const handleClose = () => {
    // Check if the click event target is the close button or the submit button
    setPopUpModel(false)
  }

  return (
    <div>
      <Modal open={popUpModel} className="">
        <Box className="md:px-8 md:py-5 min-w-[400px;]  absolute top-1/2 left-1/2 md:w-auto bg-white -translate-x-1/2 -translate-y-1/2 rounded-md">
          {children}
          <div className="flex justify-between">
            <Button
              disabled={isLoading}
              variant="outlined"
              className="my-5 md:mb-0 mr-3 md:mr-0 capitalize"
              onClick={handleClose}
            >
              cancel
            </Button>
            <div className="flex gap-2">
              {isLoading && <CircularProgress color="success" />}
              <Button
                disabled={isLoading}
                variant="contained"
                className="my-5 md:mb-0 mr-3 md:mr-0 capitalize"
                onClick={handleSubmit}
              >
                confirm
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default PopupWindow
