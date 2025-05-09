import React, { SetStateAction } from 'react'

export interface IFormInput {
  companyName: string
  email: string
  password: string
  confirmPassword: string
}

export interface IPopupWindowSectionProps {
  isPopupWindowOpen: boolean
  setIsPopupWindowOpen: React.Dispatch<SetStateAction<boolean>>
  userEmail: string
}
