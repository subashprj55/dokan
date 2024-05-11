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
          <AccountSettings />
          <NotificationSettings />
          <StoreSettings />
          <TaxSettings />
          <ProfileSettingsForm />
        </Container>
      </NavContainer>
    </>
  )
}

export default page

const AccountSettings = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSave = () => {
    // Handle save functionality here
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Confirm Password:', confirmPassword)
  }

  return (
    <div className="max-w-md pt-36">
      <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
      <form onSubmit={handleSave}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          className="mb-4"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          className="mb-4"
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
          fullWidth
          className="mb-4"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mb-4"
        >
          Save Changes
        </Button>
      </form>
    </div>
  )
}

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)

  const handleSave = () => {
    // Logic to save notification settings
  }

  return (
    <div className="p-4 bg-white rounded shadow my-20">
      <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
      <div className="mb-4">
        <FormControlLabel
          control={
            <Switch
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              color="primary"
            />
          }
          label="Email Notifications"
        />
      </div>
      <div className="mb-4">
        <FormControlLabel
          control={
            <Switch
              checked={pushNotifications}
              onChange={() => setPushNotifications(!pushNotifications)}
              color="primary"
            />
          }
          label="Push Notifications"
        />
      </div>
      <div className="flex justify-end">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  )
}

const StoreSettings = () => {
  const [storeName, setStoreName] = useState('')
  const [storeDescription, setStoreDescription] = useState('')

  const handleSave = () => {
    // Logic to save store settings
  }

  return (
    <div className="p-4 bg-white rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">Store Settings</h2>
      <div className="mb-4">
        <TextField
          label="Store Name"
          variant="outlined"
          fullWidth
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <TextField
          label="Store Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={storeDescription}
          onChange={(e) => setStoreDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  )
}

const TaxSettings = () => {
  const [taxRate, setTaxRate] = useState('')

  const handleSave = () => {
    // Logic to save tax settings
  }

  return (
    <div className="p-4 bg-white rounded shadow mt-20">
      <h2 className="text-xl font-semibold mb-4">Tax Settings</h2>
      <div className="mb-4">
        <TextField
          label="Tax Rate (%)"
          variant="outlined"
          fullWidth
          value={taxRate}
          onChange={(e) => setTaxRate(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  )
}

const ProfileSettingsForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Add logic to update user profile/settings
    console.log('Profile updated:', { fullName, email, password })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
