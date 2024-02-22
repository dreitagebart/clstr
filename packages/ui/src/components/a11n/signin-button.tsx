import { Button } from '@mantine/core'
import { FC } from 'react'

import { login } from './actions'

interface Props {
  loading: boolean
}

export const SignInButton: FC<Props> = async ({ loading }) => {
  return (
    <Button loading={loading} onClick={() => login()}>
      Sign in
    </Button>
  )
}
