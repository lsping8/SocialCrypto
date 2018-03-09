import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from 'react-apollo'

import { initClient } from './initClient'
import { initStore } from './initStore'

export default (WrappedComponent) => {
  class WithData extends Component {
    constructor (props) {
      super(props)
      this.client = initClient(this.props.initialState)
      this.store = initStore(this.client, this.props.initialState)
    }

    render () {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
  WithData.propTypes = {
    initialState: PropTypes.object
  }

  return WithData
}
