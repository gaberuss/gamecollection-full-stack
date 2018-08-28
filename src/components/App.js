import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import GameList from './GameList'
import CreateGame from './CreateGame'
import EditGame from './EditGame'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={GameList} />
            <Route exact path="/create-game" component={CreateGame} />
            <Route path="/edit-game/:id" component={EditGame} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
