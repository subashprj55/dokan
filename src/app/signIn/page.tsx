'use client'

import { useState } from 'react'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log('Signing up...')
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-light mb-6">Create your Free Account</h2>
        <div className="mb-6 flex flex-col md:flex-row md:space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4 md:mb-0">
            Sign up with Google
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded mb-4 md:mb-0">
            Sign up with Apple
          </button>
        </div>

        <form onSubmit={handleSignUp} className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <input type="checkbox" className="mr-2 leading-tight" required />
            <span className="text-sm text-gray-600">
              By signing up, you are creating a Flowbite account, and you agree
              to Flowbite’s Terms of Use and Privacy Policy.
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Create an account
          </button>
        </form>

        <div className="mt-6 text-center">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign in here
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
