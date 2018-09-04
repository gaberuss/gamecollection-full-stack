import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'

const cache = new InMemoryCache()

const defaults = {
  inventory: {
    __typename: 'Inventory',
    name: '',
    gameConsole: '',
    condition: '',
  },
}

const stateLink = withClientState({
  cache,
  defaults,
  resolvers: {},
})

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
