import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: ID!) {
    deleteGame(id: $id) {
      id
    }
  }
`

class Game extends Component {
  render() {
    const { id } = this.props.game
    console.log({ id })
    return (
      <main className="mw6 left">
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0 dark-gray">
              {this.props.game.name}
            </h1>
            <h2 className="f6 fw6 mt0 mb0 black-60">
              {this.props.game.gameConsole}
            </h2>
            <h3 className="f6 fw4 mt0 mb0 black-60">
              Condition: {this.props.game.condition}
            </h3>
          </div>
          <Mutation
            mutation={DELETE_GAME_MUTATION}
            variables={{ id }}
            update={(cache, { data: { deleteGame } }) => {
              const { inventory } = cache.readQuery({ query: INVENTORY_QUERY })
              console.log(inventory)
              cache.writeQuery({
                query: INVENTORY_QUERY,
                data: { inventory: inventory.filter(game => game.id !== id) },
              })
            }}
          >
            {deleteGameMutation => (
              <button className="delete-button" onClick={deleteGameMutation}>
                X
              </button>
            )}
          </Mutation>
        </article>
      </main>
    )
  }
}

export default Game
