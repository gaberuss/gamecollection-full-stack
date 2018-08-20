import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="flex pal justify-between nowrap blue top-border">
        <div className="flex flex-fixed light-gray">
          <div className="fw7 mr2 ml3">Game Collection</div>
          <Link to="/" className="ml1 no-underline light-gray">
            inventory
          </Link>
          <div className="ml1">|</div>
          <Link to="/create-game" className="ml1 no-underline light-gray">
            add game
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
