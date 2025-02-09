'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
// aos scroll animation package
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Toaster } from 'react-hot-toast'

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient()

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
  })

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  )
}
