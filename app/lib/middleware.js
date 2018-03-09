import { applyMiddleware, compose } from 'redux'

export default function createMiddleware (clientMiddleware) {
  const middleware = applyMiddleware(clientMiddleware)
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') {
    return compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__())
  }
  return middleware
}
