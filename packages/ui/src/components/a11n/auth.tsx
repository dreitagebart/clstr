import { auth } from '@clstr/auth'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

const isAuthorized = async () => {
  const checkAuth = await auth()

  if (checkAuth?.user) {
    return true
  }

  return false
}

export const Auth = async ({ children }: PropsWithChildren) => {
  const auth = await isAuthorized()

  if (!auth) {
    redirect('/')
  }

  return <>{children}</>
}
