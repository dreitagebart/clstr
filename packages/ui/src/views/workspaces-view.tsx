import { WorkspaceNavbar } from '@components/navbars'
import { Header, Navbar } from '@components/shell'

export const WorkspacesView = async () => {
  return (
    <>
      <Header></Header>
      <Navbar>
        <WorkspaceNavbar></WorkspaceNavbar>
      </Navbar>
      <>Ich bin workspaces</>
    </>
  )
}
