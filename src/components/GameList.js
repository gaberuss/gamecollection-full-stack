import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Game from './Game'

const INVENTORY_QUERY = gql`
  {
    inventory {
      id
      createdAt
      name
      gameConsole
      condition
    }
  }
`

class GameList extends Component {
  render() {
    return (
      <Query query={INVENTORY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const gamesToRender = data.inventory

          return (
            <div>
              {gamesToRender.map(game => (
                <Game key={game.id} game={game} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default GameList
