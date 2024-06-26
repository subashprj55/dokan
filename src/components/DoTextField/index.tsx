import { TextField } from '@mui/material'
import React from 'react'
import { IDoTextFIeld } from './types'

const DoTextField = ({
  value,
  setValue,
  placeholder,
  error = false,
  helperText = '',
}: IDoTextFIeld) => {
  return (
    <TextField
      id={placeholder}
      placeholder={placeholder}
      variant="outlined"
      value={value}
      fullWidth
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      }}
      sx={{
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            border: '1px solid gray',
          },
      }}
      error={error}
      helperText={helperText}
    />
  )
}

export default DoTextField
