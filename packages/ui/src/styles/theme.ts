import { MantineThemeOverride, createTheme } from '@mantine/core'
import { montserrat } from '@utils/fonts'

export const theme: MantineThemeOverride = createTheme({
  fontFamily: montserrat.style.fontFamily,
  primaryColor: 'grape',
  primaryShade: 7
})
