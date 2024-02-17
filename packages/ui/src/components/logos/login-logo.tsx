import { Text } from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const LoginLogo: FC<Props> = () => {
  return (
    <Text size='80px' style={{ userSelect: 'none' }}>
      clstr
    </Text>
  )
}
