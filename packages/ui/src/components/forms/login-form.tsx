'use client'

import {
  Box,
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ChangeEvent, FC, useCallback } from 'react'
// import { authOptions } from '@clstr/auth'
import { signIn } from 'next-auth/react'
import { IconBrandGithubFilled, TablerIconsProps } from '@tabler/icons-react'

import classes from './login-form.module.css'

interface Props {
  onSubmit: (values: FormValues) => void
}

interface FormValues {
  username: string
  password: string
}

const iconMap: Record<'github', FC<TablerIconsProps>> = {
  github: IconBrandGithubFilled
}

export const LoginForm: FC<Props> = ({ onSubmit }) => {
  const {
    values,
    onSubmit: handleSubmit,
    setFieldValue
  } = useForm<FormValues>({
    initialValues: {
      username: '',
      password: ''
    }
  })
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.name, event.target.value)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className={classes.wrapper}>
        <Stack>
          <Group grow>
            <TextInput
              placeholder='Username'
              value={values.username}
              onChange={handleChange}
              name='username'
            ></TextInput>
          </Group>
          <Group grow>
            <PasswordInput
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              name='password'
            ></PasswordInput>
          </Group>
          <Group>
            <Button type='submit'>Login</Button>
          </Group>
        </Stack>
        <Stack mt='xl' align='center'>
          <Title order={6}>Login with</Title>
          <Button
            leftSection={<IconBrandGithubFilled></IconBrandGithubFilled>}
            variant='light'
            onClick={() => signIn('github', { callbackUrl: '/' })}
          >
            Sign in with Github
          </Button>
          {/* {authOptions.providers.map(({ id, name }) => {
            const Icon = (iconMap as any)[id] as FC<TablerIconsProps>

            return (
              <Button
                leftSection={<Icon></Icon>}
                variant='light'
                key={id}
                onClick={() => signIn(id, { callbackUrl: '/' })}
              >
                {name}
              </Button>
            )
          })} */}
        </Stack>
      </Box>
    </form>
  )
}
