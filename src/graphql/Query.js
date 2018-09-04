import gql from 'graphql-tag'

export const LOAD_GAME_QUERY = gql`
  query {
    inventory @client {
      name
      gameConsole
      condition
    }
  }
`
