import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_GAME_MUTATION = gql`
  mutation CreateGameMutation(
    $name: String!
    $gameConsole: String!
    $condition: String!
  ) {
    createGame(name: $name, gameConsole: $gameConsole, condition: $condition) {
      id
      createdAt
      name
      gameConsole
      condition
    }
  }
`

const inputStyling = 'input-reset ba b--black-20 pa2 mb2 db w-100'

class EditGame extends Component {
  state = {
    name: '',
    gameConsole: '',
    condition: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, gameConsole, condition } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className={inputStyling}
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
            placeholder="A name for the game"
          />
          <input
            className={inputStyling}
            name="gameConsole"
            value={gameConsole}
            onChange={this.handleChange}
            type="text"
            placeholder="The console for this game"
          />
          <input
            className={inputStyling}
            name="condition"
            value={condition}
            onChange={this.handleChange}
            type="text"
            placeholder="What is the condition of the game?"
          />
        </div>
        <Mutation
          mutation={CREATE_GAME_MUTATION}
          variables={{ name, gameConsole, condition }}
          onCompleted={() => this.props.history.push('/')}
        >
          {createGameMutation => (
            <button
              className="f6 link dim br2 ba ph3 pv2 mb2 dib dark-gray"
              onClick={createGameMutation}
            >
              Save Edits
            </button>
          )}
        </Mutation>
      </div>
    )
  }
}

export default EditGame
