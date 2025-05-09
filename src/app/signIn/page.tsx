'use client'
import Link from 'next/link'
import { FaGoogle, FaApple } from 'react-icons/fa'
import Nav from '@/components/navBar/page'
import { useForm } from 'react-hook-form'
import { IFormInput, IPopupWindowSectionProps } from './types'
import useSignup from '../../hooks/useSignup'
import toast from 'react-hot-toast'
import Loading from '@/components/loading'
import { useRef, useState } from 'react'
import PopupWindow from '@/components/popUpWindow'
import { Box, TextField, Typography } from '@mui/material'
import useVerifyOtp from '../../hooks/useVerifyOpt'
import { useRouter } from 'next/navigation'

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

  const [isPopupWindowOpen, setIsPopupWindowOpen] = useState<boolean>(false)

  const [userEmail, setUserEmail] = useState<string>('')

  const { mutate, isPending } = useSignup(
    () => {
      // on success
      setIsPopupWindowOpen(true)
    },
    () => {
      toast.error('Something went wrong. Please try again later')
    }
  )

  const handleSignUp = (data: IFormInput) => {
    setUserEmail(data.email)
    mutate(data)
  }

  return (
    <>
      {isPending && <Loading />}
      <PopupWindowSection
        isPopupWindowOpen={isPopupWindowOpen}
        setIsPopupWindowOpen={setIsPopupWindowOpen}
        userEmail={userEmail}
      />
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

const PopupWindowSection = ({
  isPopupWindowOpen,
  setIsPopupWindowOpen,
  userEmail,
}: IPopupWindowSectionProps) => {
  const [otp, setOtp] = useState<string[]>(Array.from({ length: 6 }, () => ''))

  const router = useRouter()

  const { mutate, isPending } = useVerifyOtp(
    () => {
      toast.success('User created successfully!')
      router.push('/dashboard')
    },
    () => {
      toast.error('Something went wrong. Please check OPTS and try again')
    }
  )

  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length: 6 }, () => null)
  )

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp]
      newOtp[index] = value.slice(-1)
      return newOtp
    })

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleBackspace = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key !== 'Backspace' || otp[index] || index === 0) return
    inputRefs.current[index - 1]?.focus()
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData('text').trim()
    if (/^\d{6}$/.test(pastedData)) {
      setOtp(pastedData.split(''))
      inputRefs.current[5]?.focus()
    }
  }

  const handleSubmit = () => {
    const newOtp = otp.join('')
    if (newOtp.length < 6) return

    const newData = {
      email: userEmail,
      OTP: newOtp,
    }
    mutate(newData)
  }
  const abc = true

  return (
    <>
      <PopupWindow
        popUpModel={isPopupWindowOpen}
        setPopUpModel={setIsPopupWindowOpen}
        handleSubmit={handleSubmit}
        isLoading={isPending}
      >
        <Box className="p-6 text-center">
          <Typography variant="h5" className="font-semibold pb-1">
            OTP Authentication
          </Typography>
          <Typography variant="body2" className="text-gray-500 pb-5">
            {`Enter the 6-digit OTP sent to ${userEmail}.`}
          </Typography>

          <Box className="flex justify-center gap-2 mb-4">
            {otp.map((digit, index) => (
              <TextField
                key={index}
                type="text"
                inputRef={(el) => (inputRefs.current[index] = el)}
                inputProps={{
                  maxLength: 1,
                  className: 'text-center',
                  // @ts-ignore
                  onKeyDown: (e) => handleBackspace(index, e),
                }}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onPaste={handlePaste}
                className="w-12 h-12 text-lg border rounded-md"
              />
            ))}
          </Box>
        </Box>
      </PopupWindow>
    </>
  )
}
