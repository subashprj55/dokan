import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import { ILoading } from './type'

const Loading = ({ open = true, handleClose }: ILoading) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading
