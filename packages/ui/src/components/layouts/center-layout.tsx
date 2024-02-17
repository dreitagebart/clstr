import '@mantine/core/styles.css'
import '@styles/globals.css'
import { ColorSchemeScript, Flex, MantineProvider } from '@mantine/core'
import { FC, PropsWithChildren } from 'react'
import { colorSchemeManager } from '@utils/color-scheme'
import { theme } from '@styles/theme'

import classes from './center-layout.module.css'

export type CenterLayoutProps = PropsWithChildren

export const CenterLayout: FC<CenterLayoutProps> = ({ children }) => {
  return (
    <>
      <ColorSchemeScript></ColorSchemeScript>
      <MantineProvider
        classNamesPrefix='clstr'
        withCssVariables
        defaultColorScheme='auto'
        colorSchemeManager={colorSchemeManager}
        theme={theme}
      >
        <Flex
          align='center'
          justify='center'
          classNames={{
            root: classes.root
          }}
        >
          {children}
        </Flex>
      </MantineProvider>
    </>
  )
}
