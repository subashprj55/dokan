// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { TextField, TextFieldProps } from '@mui/material'

// ----------------------------------------------------------------------

type DokSelectProps = TextFieldProps & {
  name: string
  native?: boolean
  maxHeight?: boolean | number
  children: React.ReactNode
}

export function DokSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
  ...other
}: DokSelectProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    px: 1,
                    maxHeight:
                      typeof maxHeight === 'number' ? maxHeight : 'unset',
                    '& .MuiMenuItem-root': {
                      px: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    },
                  }),
                },
              },
            },
            sx: { textTransform: 'capitalize' },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  )
}
