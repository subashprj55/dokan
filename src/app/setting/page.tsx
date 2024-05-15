'use client'
import React, { useState } from 'react'
import Container from '@/components/containder'
import NavContainer from '@/components/navContainer'
import { TextField, Switch, FormControlLabel, Button } from '@mui/material'

const page = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <GeneralSettings />
          <AccountSettings />
          <NotificationSetting />
          <SecuritySettings />
        </Container>
      </NavContainer>
    </>
  )
}

export default page

const GeneralSettings = () => {
  const [companyName, setCompanyName] = useState('Dokan')
  const [companyEmail, setCompanyEmail] = useState('info@dokan.com')
  const [companyPhone, setCompanyPhone] = useState('+1 (555) 555-5555')
  const [companyAddress, setCompanyAddress] = useState(
    '123 Main St, Anytown USA'
  )

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log('Changes saved!')
  }

  return (
    <div className=" mx-auto mt-20 p-8 border border-gray-300 rounded-md">
      <h1 className="text-2xl font-semibold tracking-wider mb-4">General</h1>
      <p className="text-gray-600 mb-4">Manage your general settings</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <TextField
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '1px solid gray',
                },
            }}
          />
        </div>
        <div>
          <TextField
            label="Company Email"
            variant="outlined"
            type="email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '1px solid gray',
                },
            }}
          />
        </div>
        <div>
          <TextField
            label="Company Phone"
            variant="outlined"
            type="tel"
            value={companyPhone}
            onChange={(e) => setCompanyPhone(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '1px solid gray',
                },
            }}
          />
        </div>
        <div>
          <TextField
            label="Company Address"
            variant="outlined"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  border: '1px solid gray',
                },
            }}
          />
        </div>
        <div className="col-span-2">
          <Button
            variant="contained"
            color="success"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

const NotificationSetting = () => {
  const [newOrderNotification, setNewOrderNotification] = useState(false)
  const [lowInventoryNotification, setLowInventoryNotification] =
    useState(false)
  const [customerMessagesNotification, setCustomerMessagesNotification] =
    useState(false)

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log('Changes saved!')
  }

  return (
    <div className="mx-auto mt-8 p-8 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      <p className="text-gray-600 mb-4">Manage your notification settings</p>
      <div>
        <FormControlLabel
          control={
            <Switch
              color="warning"
              checked={newOrderNotification}
              onChange={(e) => setNewOrderNotification(e.target.checked)}
            />
          }
          label="New Orders"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              color="warning"
              checked={lowInventoryNotification}
              onChange={(e) => setLowInventoryNotification(e.target.checked)}
            />
          }
          label="Low Inventory"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              color="warning"
              checked={customerMessagesNotification}
              onChange={(e) =>
                setCustomerMessagesNotification(e.target.checked)
              }
            />
          }
          label="Customer Messages"
        />
      </div>
      <div className="mt-4">
        <Button variant="contained" color="success" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
    </div>
  )
}

const AccountSettings = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log('Changes saved!')
  }

  return (
    <div className=" mx-auto mt-8 p-8 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
      <div>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          className="mb-4"
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          className="mb-4"
        />
      </div>
      <div className="mt-4">
        <Button variant="contained" color="success" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
    </div>
  )
}

const SecuritySettings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [ipRestrictions, setIpRestrictions] = useState(false)
  const [activityLogging, setActivityLogging] = useState(false)

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log('Changes saved!')
  }

  return (
    <div className=" mt-8 p-8 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Security</h2>
      <p className="text-gray-600 mb-4">Manage your security settings</p>
      <div>
        <FormControlLabel
          control={
            <Switch
              color="warning"
              checked={twoFactorAuth}
              onChange={(e) => setTwoFactorAuth(e.target.checked)}
            />
          }
          label="Two-Factor Authentication"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              color="warning"
              checked={ipRestrictions}
              onChange={(e) => setIpRestrictions(e.target.checked)}
            />
          }
          label="IP Restrictions"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              color="warning"
              checked={activityLogging}
              onChange={(e) => setActivityLogging(e.target.checked)}
            />
          }
          label="Activity Logging"
        />
      </div>
      <div className="mt-4">
        <Button variant="contained" color="success" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </div>
    </div>
  )
}
