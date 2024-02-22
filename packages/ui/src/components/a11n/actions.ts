'use server'

import { signIn, signOut } from '@clstr/auth'

export const login = async (provider?: string, options?: any) => {
  await signIn(provider, options)
}

export const logout = async () => {
  await signOut()
}
