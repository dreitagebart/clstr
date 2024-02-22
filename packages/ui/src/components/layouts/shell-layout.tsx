import '@mantine/core/styles.css'
import '@styles/globals.css'
import { AppShell, ColorSchemeScript, MantineProvider } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { Main } from '@components/shell'
import { theme } from '@styles/theme'
import { colorSchemeManager } from '@utils/color-scheme'
import { SessionProvider, auth } from '@clstr/auth'
import { makeClient, ApolloNextAppProvider } from '@clstr/graphql/ssr'

import classes from './shell-layout.module.css'

export const ShellLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth()

  return (
    <>
      <ColorSchemeScript defaultColorScheme='auto'></ColorSchemeScript>
      <SessionProvider session={session}>
        <ApolloNextAppProvider makeClient={makeClient}>
          <MantineProvider
            classNamesPrefix='clstr'
            withCssVariables
            defaultColorScheme='auto'
            theme={theme}
            colorSchemeManager={colorSchemeManager}
          >
            <AppShell
              layout='alt'
              classNames={{
                header: classes.header,
                navbar: classes.navbar,
                main: classes.main
              }}
              header={{ height: 80, offset: true }}
              navbar={{
                width: { base: 400, md: 300, lg: 400 },
                breakpoint: 'sm',
                collapsed: {
                  mobile: true,
                  desktop: false
                }
              }}
              aside={{
                width: { base: 400, md: 300 },
                breakpoint: 'sm',
                collapsed: {
                  mobile: true,
                  desktop: false
                }
              }}
            >
              <Main>{children}</Main>
            </AppShell>
          </MantineProvider>
        </ApolloNextAppProvider>
      </SessionProvider>
    </>
  )
}
