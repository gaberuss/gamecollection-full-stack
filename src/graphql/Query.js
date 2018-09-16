import gql from 'graphql-tag'

export const LOAD_GAME_QUERY = gql`
  query {
    game(id: $id) @client {
      id
      name
      gameConsole
      condition
    }
  }
`
