import { graphql } from '../gql'

export const allUsersQuery = graphql(`
  query AllUsersQuery {
    users {
      id
      firstname
      lastname
      email
    }
  }
`)
