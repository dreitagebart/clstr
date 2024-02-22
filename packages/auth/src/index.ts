import NextAuth from 'next-auth'
import type { NextAuthResult } from 'next-auth'
import GitHub from 'next-auth/providers/github'

// export const {
//   handlers: { GET, POST },
//   auth
// }: NextAuthResult = NextAuth({
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string
//     })
//   ]
// })

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login'
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ]
}) as any
