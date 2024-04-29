'use client'
import { useEffect, useState } from 'react'
import { FaGoogle, FaApple } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const LoginPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
      <Nav />
      <LoginSection />
      <Footer />
    </>
  )
}

export default LoginPage

const LoginSection = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in...')
  }

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-[500px] w-full "
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-medium mb-6 text-center">Welcome back</h2>
        <div className="mb-6 flex flex-col md:flex-row md:space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 mb-4 md:mb-0">
            <FaGoogle />
            <span>Log in with Google</span>
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 mb-4 md:mb-0">
            <FaApple />
            <span>Log in with Apple</span>
          </button>
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-2xl">
          <div className="mb-6">
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
          <div className="mb-6">
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
          <div className="mb-6 flex items-center justify-between space-x-2">
            <div>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 leading-tight"
              />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign in to your account
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-sm">Don’t have an account yet? </span>
          <a href="#" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </div>
      </div>
    </div>
  )
}
