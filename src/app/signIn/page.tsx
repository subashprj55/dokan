'use client'
import Link from 'next/link'
import { FaGoogle, FaApple } from 'react-icons/fa'
import Nav from '@/components/navBar/page'
import Footer from '@/components/footer'
import { useForm } from 'react-hook-form'
import { IFormInput } from './types'
import useSignup from '../hooks/useSignup'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Loading from '@/components/loading'

const SignInPage = () => {
  return (
    <>
      <Nav />
      <SignInSection />
    </>
  )
}

const SignInSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>()

  const router = useRouter()

  const { mutate, isPending } = useSignup(
    () => {
      toast.success('User created successfully!')
      router.push('/login')
    },
    () => {
      toast.error('Something went wrong. Please try again later')
    }
  )

  const handleSignUp = (data: IFormInput) => {
    mutate(data)
  }

  return (
    <>
      {isPending && <Loading />}

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

          <form onSubmit={handleSubmit(handleSignUp)} className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                {...register('companyName', {
                  required: 'Company name is required',
                })}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className=" text-red-500">{errors.companyName?.message}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                })}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className=" text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className=" text-red-500">{errors.password?.message}</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: (value) =>
                    value === getValues('password') || 'Password do not match',
                })}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className=" text-red-500">{errors.confirmPassword?.message}</p>
            </div>
            <div className="mb-6">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-sm text-gray-600">
                By signing up, you are creating a Flowbite account, and you
                agree to Flowbite’s Terms of Use and Privacy Policy.
              </span>
            </div>
            <button
              disabled={isPending}
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
    </>
  )
}

export default SignInPage
