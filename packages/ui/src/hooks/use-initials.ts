import { useMemo } from 'react'

export const useInitials = (name: string) => {
  return useMemo(() => {
    return name
      .split(' ')
      .map((seg) => seg.charAt(0).toUpperCase())
      .toString()
      .replace(',', '')
  }, [name])
}
