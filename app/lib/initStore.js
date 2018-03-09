import { createStore } from 'redux'
import getReducer from './reducer'
import createMiddleware from './middleware'

let reduxStore = null

export const initStore = (client, initialState) => {
  let store
  if (!reduxStore) {
    const middleware = createMiddleware(client.middleware())
    store = createStore(getReducer(client), initialState, middleware)
    reduxStore = store
  }
  return reduxStore
}
