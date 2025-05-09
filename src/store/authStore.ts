import { create } from 'zustand'

interface AuthState {
  user: any
  login: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (token: string) => {
    localStorage.setItem('token', token)
    set({ user: { token } })
  },
  logout: () => {
    localStorage.removeItem('token')
    set({ user: null })
  },
}))
