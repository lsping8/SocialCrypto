import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, StatusBar, View, StyleSheet } from 'react-native'
import { Container } from 'native-base'

import { ApolloProvider } from 'react-apollo'

import { initClient } from './lib/initClient'
import { initStore } from './lib/initStore'

import Navigation from './Navigation/index'
import MainScreen from './Containers/test'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B'
  }
})

class App extends Component {
  constructor (props) {
    super(props)
    this.client = initClient(props.initialState)
    this.store = initStore(this.client, this.props.initialState)
  }

  render () {
    const MyStatusBar = ({backgroundColor, ...props}) => (
      <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar backgroundColor={backgroundColor} {...props} />
      </View>
    )
    return (
      <Container>
        {Platform.OS === 'ios'
          ? <MyStatusBar backgroundColor='#A9A9A9' barStyle='light-content' />
          : null}
        <ApolloProvider client={this.client} store={this.store}>
          <Navigation />
        </ApolloProvider>
      </Container>
    )
  }
}
App.propTypes = {
  initialState: PropTypes.object,
  backgroundColor: PropTypes.string
}

export default App
