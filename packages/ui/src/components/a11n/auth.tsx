import { authOptions } from '@utils/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

const isAuthorized = async () => {
  const auth = await getServerSession(authOptions)

  if (auth?.user) {
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
