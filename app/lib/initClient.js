import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

import config from '../../config'

let apolloClient = null

function _initClient (initialState) {
  const networkInterface = createNetworkInterface({
    uri: config.graphqlEndpoint
  })

  const wsClient = new SubscriptionClient(`${config.subscriptionsEndPoint}`, {
    reconnect: true
  })

  const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    wsClient
  )

  networkInterface.use([{
    applyMiddleware (req, next) {
      next()
    }
  }])

  return new ApolloClient({
    initialState,
    networkInterface: networkInterfaceWithSubscriptions
  })
}

export const initClient = (initialState = {}) => {
  if (!apolloClient) {
    apolloClient = _initClient(initialState)
  }
  return apolloClient
}
