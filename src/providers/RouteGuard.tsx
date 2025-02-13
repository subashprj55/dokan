'use client'

import { ReactNode, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Loading from '@/components/loading'

const RouteGuard = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname()
  const publicRoutes = ['/', '/login', '/signIn', '/aboutUs']
  const isPublicRoute = publicRoutes.includes(pathName)

  return isPublicRoute ? (
    <PublicRouteGuard>{children}</PublicRouteGuard>
  ) : (
    <PrivateRouteGuard>{children}</PrivateRouteGuard>
  )
}

export default RouteGuard

// Guard for public routes
const PublicRouteGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const pathName = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  const protectedPublicRoutes = ['/login', '/signIn']
  const isProtectedPublicRoute = protectedPublicRoutes.includes(pathName)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token && isProtectedPublicRoute) {
      // Redirect to dashboard if user is authenticated and tries to access login/signIn
      router.push('/dashboard')
    } else {
      // Allow access to public routes
      setIsAuthenticated(true)
    }
  }, [router, isProtectedPublicRoute])

  if (isAuthenticated === null) return <Loading />

  return <>{children}</>
}

// Guard for private routes
const PrivateRouteGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
<<<<<<< HEAD
      router.push('/login')
=======
      router.push('/login') // Redirect to login if no token
>>>>>>> main
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

<<<<<<< HEAD
  if (isAuthenticated === null) return <Loading />

  return <>{children}</>
}
=======
  if (isAuthenticated === null) return <p>Loading...</p> // Show loader while checking auth

  return <>{children}</>
}

export default RouteGuard
>>>>>>> main
