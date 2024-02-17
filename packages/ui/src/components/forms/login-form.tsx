'use client'

import {
  Box,
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { ChangeEvent, FC, useCallback } from 'react'

import classes from './login-form.module.css'

interface Props {
  onSubmit: (values: FormValues) => void
}

interface FormValues {
  username: string
  password: string
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
      </Box>
    </form>
  )
}
