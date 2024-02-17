'use client'

import { localStorageColorSchemeManager } from '@mantine/core'

export const colorSchemeManager = localStorageColorSchemeManager({
  key: 'clstr-color-scheme'
})
