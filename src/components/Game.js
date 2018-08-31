import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router'

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
    const { id, name, gameConsole, condition } = this.props.game
    const { history } = this.props
    return (
      <main className="mw6 left">
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0 dark-gray">
              {name}
            </h1>
            <h2 className="f6 fw6 mt0 mb0 black-60">{gameConsole}</h2>
            <h3 className="f6 fw4 mt0 mb0 black-60">Condition: {condition}</h3>
          </div>
          <Mutation
            mutation={DELETE_GAME_MUTATION}
            variables={{ id }}
            update={(cache, { data: { deleteGame } }) => {
              const { inventory } = cache.readQuery({ query: INVENTORY_QUERY })
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
          <button
            className="edit-button"
            // remove this and have the game loaded from cache
            onClick={() => history.push(`/edit-game/${id}`)}
          >
            Edit
          </button>
        </article>
      </main>
    )
  }
}

export default withRouter(Game)
