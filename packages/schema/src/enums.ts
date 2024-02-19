import { EnumRef } from '@pothos/core'

import { builder } from './builder'

export const ColorSchemeEnum: EnumRef<'light' | 'dark'> = builder.enumType(
  'ColorScheme',
  {
    values: ['light', 'dark'] as const
  }
)
