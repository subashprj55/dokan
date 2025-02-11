'use client'
import { ReactNode, useEffect } from 'react'
// for api calling
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// aos scroll animation package
import AOS from 'aos'
import 'aos/dist/aos.css'
// for notification
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './AuthContex'
import { usePathname } from 'next/navigation'
import RouteGuard from './RouteGuard'

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient()

  const pathName = usePathname()

  const publicRoute = ['/', '/login', '/signup', '/aboutUs']
  const isProtect = !publicRoute.includes(pathName)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {isProtect ? <RouteGuard>{children}</RouteGuard> : children}
        </QueryClientProvider>
      </AuthProvider>
    </>
  )
}
