import React, { ReactNode, SetStateAction } from 'react'

export interface IPopUpWindown {
  children: ReactNode
  popUpModel: boolean
  setPopUpModel: React.Dispatch<SetStateAction<boolean>>
  handleSubmit: () => void
  isLoading?: boolean
}
