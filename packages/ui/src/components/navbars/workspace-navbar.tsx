import {
  Box,
  Group,
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
  Text,
  UnstyledButton
} from '@mantine/core'
import { IconChevronDown, IconSearch } from '@tabler/icons-react'
import Link from 'next/link'
import { FC } from 'react'

import classes from './workspace-navbar.module.css'

interface Props {}

export const WorkspaceNavbar: FC<Props> = () => {
  return (
    <Box className={classes.wrapper}>
      <Menu
        transitionProps={{ duration: 250, transition: 'rotate-left' }}
        withinPortal
        width='target'
        classNames={{
          divider: classes.menuDivider,
          item: classes.menuItem,
          itemLabel: classes.menuItemLabel,
          itemSection: classes.menuItemSection,
          dropdown: classes.menuDropdown
        }}
      >
        <MenuTarget>
          <UnstyledButton className={classes.menuTarget}>
            <Group justify='space-between'>
              <Text>Blutwurst</Text>
              <IconChevronDown></IconChevronDown>
            </Group>
          </UnstyledButton>
        </MenuTarget>
        <MenuDropdown>
          <MenuLabel>latest workspaces</MenuLabel>
          <MenuItem>Forellen</MenuItem>
          <MenuDivider></MenuDivider>
          <MenuItem
            leftSection={<IconSearch></IconSearch>}
            component={Link}
            href='/workspaces'
          >
            Browse workspaces
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </Box>
  )
}
