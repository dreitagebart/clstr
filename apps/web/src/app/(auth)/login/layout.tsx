import { Metadata } from 'next'
import { CenterLayout } from '@clstr/ui/layouts'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'clstr login',
  description: 'by dreitagbart'
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <CenterLayout>{children}</CenterLayout>
      </body>
    </html>
  )
}

export default Layout
