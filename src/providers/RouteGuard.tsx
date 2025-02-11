import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/login') // Redirect to login if no token
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (isAuthenticated === null) return <p>Loading...</p> // Show loader while checking auth

  return <>{children}</>
}

export default RouteGuard
