'use client'

import '@mantine/core/styles.css'
import '@styles/globals.css'
import { AppShell, ColorSchemeScript, MantineProvider } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'
import { useAside } from '@hooks/use-aside'
import { useNavbar } from '@hooks/use-navbar'
import { Main } from '@components/shell'
import { theme } from '@styles/theme'
import { colorSchemeManager } from '@utils/color-scheme'
import { SessionProvider } from 'next-auth/react'

export type ShellLayoutProps = PropsWithChildren

export const ShellLayout: FC<ShellLayoutProps> = ({ children }) => {
  const navbar = useNavbar()
  const aside = useAside()

  return (
    <>
      <ColorSchemeScript></ColorSchemeScript>
      <SessionProvider>
        <MantineProvider
          classNamesPrefix='clstr'
          withCssVariables
          defaultColorScheme='auto'
          theme={theme}
          colorSchemeManager={colorSchemeManager}
        >
          <AppShell
            layout='alt'
            header={{ height: 80, offset: true }}
            navbar={{
              width: { base: 400, md: 300, lg: 400 },
              breakpoint: 'sm',
              collapsed: {
                mobile: true,
                desktop: !navbar.opened
              }
            }}
            aside={{
              width: { base: 400, md: 300 },
              breakpoint: 'sm',
              collapsed: {
                mobile: true,
                desktop: !aside.opened
              }
            }}
          >
            <Main>{children}</Main>
          </AppShell>
        </MantineProvider>
      </SessionProvider>
    </>
  )
}
