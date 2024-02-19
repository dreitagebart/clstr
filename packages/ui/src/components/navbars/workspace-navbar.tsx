import {
  Box,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
  UnstyledButton
} from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import Link from 'next/link'
import { FC } from 'react'

interface Props {}

export const WorkspaceNavbar: FC<Props> = () => {
  return (
    <Box>
      <Menu>
        <MenuTarget>
          <UnstyledButton>
            <Group justify='space-between'>
              <Text>Blutwurst</Text>
              <IconChevronDown></IconChevronDown>
            </Group>
          </UnstyledButton>
        </MenuTarget>
        <MenuDropdown>
          <MenuItem>Forellen</MenuItem>
          <MenuItem component={Link} href='/workspaces'>
            Browse workspaces
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </Box>
  )
}
