import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'

import { LOAD_GAME_QUERY } from '../graphql/Query'

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
    )
  }
}

export default compose(
  graphql(LOAD_GAME_QUERY, {
    props: ({ data: { inventory } }) => ({
      inventory,
    }),
    // options: props => ({ variables: { id: props.match.params.id } }),
  })
)(EditGame)
