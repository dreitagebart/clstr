import { useState } from 'react'

export const useAside = () => {
  const [opened, setOpened] = useState(true)

  return { opened, setOpened }
}
