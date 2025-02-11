'use client'
import { useContext, useEffect, useState } from 'react'
import { FaGoogle, FaApple } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from '@/components/navBar/page'
import Footer from '@/components/footer'
import { useForm } from 'react-hook-form'
import { IFormInput } from './types'
import useLogin from '../hooks/useLogin'
import Loading from '@/components/loading'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/providers/AuthContex'

const LoginPage = () => {
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
  const router = useRouter()
  const auth = useContext(AuthContext)

  console.log(auth?.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const { mutate, isPending } = useLogin(
    //on successful login
    () => {
      toast.success('Login successful')
      router.push('/dashboard')
    },
    // if there is some error
    () => {
      toast.error('Something went wrong, Please check email and password')
    }
  )

  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (data: IFormInput) => {
    // Perform login logic here
    mutate(data)
  }

  return (
    <>
      {isPending && <Loading />}
      <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
        <div
          className="bg-white p-8 rounded-lg shadow-lg max-w-[500px] w-full "
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-medium mb-6 text-center">
            Welcome back
          </h2>
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

          <form
            onSubmit={handleSubmit(handleLogin)}
            className="w-full max-w-2xl"
          >
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                })}
                type="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className=" text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register('password', {
                  required: 'password is required',
                })}
              />
              <p className=" text-red-500">{errors.password?.message}</p>
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
    </>
  )
}
