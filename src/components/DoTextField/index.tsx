import { TextField } from '@mui/material'
import React from 'react'
import { IDoTextFIeld } from './types'

const DoTextField = ({ value, setValue, placeholder }: IDoTextFIeld) => {
  return (
    <TextField
      id={placeholder}
      placeholder={placeholder}
      variant="outlined"
      value={value}
      fullWidth
      size="small"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      }}
      sx={{
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            border: '1px solid gray',
          },
      }}
    />
  )
}

export default DoTextField
