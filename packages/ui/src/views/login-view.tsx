'use client'

import { FC } from 'react'
import { LoginForm } from '@components/forms'
import { LoginLogo } from '@components/logos/login-logo'
import { Flex } from '@mantine/core'

interface Props {}

export const LoginView: FC<Props> = () => {
  return (
    <>
      <Flex
        direction={{ base: 'column' }}
        gap={{ base: 'xs' }}
        justify='center'
        align='center'
        miw={{ base: 420 }}
      >
        <LoginLogo></LoginLogo>
        <LoginForm
          onSubmit={(values) => {
            return null
          }}
        ></LoginForm>
      </Flex>
    </>
  )
}
