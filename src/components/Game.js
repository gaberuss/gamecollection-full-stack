import React, { Component } from 'react'
import gql from 'graphql-tag'

const DELETE_GAME = gql`
  mutation DeleteGameMutation($id: String!) {
    deleteGame(id: $id) {
      id
    }
  }
`

class Game extends Component {
  render() {
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
          <button className="delete-button">X</button>
        </article>
      </main>
    )
  }
}

export default Game
