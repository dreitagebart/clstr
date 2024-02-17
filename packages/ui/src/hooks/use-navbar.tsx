import { useState } from 'react'

export const useNavbar = () => {
  const [opened, setOpened] = useState(true)

  return { opened, setOpened }
}
