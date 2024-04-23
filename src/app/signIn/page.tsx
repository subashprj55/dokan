'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaGoogle, FaApple } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log('Signing up...')
  }

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing option
    })
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-[500px] w-full "
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-light mb-6">Create your Free Account</h2>
        <div className="mb-6 flex flex-col md:flex-row md:space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 mb-4 md:mb-0">
            <FaGoogle className=" text-base" />
            <span>Sign up with Google</span>
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 mb-4 md:mb-0">
            <FaApple />
            <span>Sign up with Apple</span>
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
          <Link href="login" className="text-blue-500 hover:underline">
            Sign in here
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
