import { ShellLayout } from '@clstr/ui/layouts'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'clstr',
  description: 'by dreitagebart'
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ShellLayout>{children}</ShellLayout>
      </body>
    </html>
  )
}

export default Layout
