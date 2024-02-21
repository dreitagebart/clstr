'use client'

import { allUsersQuery, useSuspenseQuery } from '@clstr/graphql'
import { Auth } from '@components/a11n'
import { Header, Navbar } from '@components/shell'
import { Group, Text } from '@mantine/core'
import { FC } from 'react'

interface Props {}

export const SettingsView: FC<Props> = () => {
  // const { data, error } = useSuspenseQuery(allUsersQuery, {
  //   fetchPolicy: 'no-cache'
  // })

  // if (error) {
  //   return (
  //     <div>
  //       <pre>{JSON.stringify(error, null, 2)}</pre>
  //     </div>
  //   )
  // }

  return (
    <Auth>
      <Header></Header>
      <Navbar>Einstellungen</Navbar>
      <>
        {/* {data?.users.map((user) => {
          return (
            <Group key={user.id}>
              <Text>{user.firstname}</Text>
              <Text>{user.lastname}</Text>
            </Group>
          )
        })} */}
      </>
    </Auth>
  )
}
