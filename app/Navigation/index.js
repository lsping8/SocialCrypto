import React, { Component } from 'react'
import {
  StackNavigator
} from 'react-navigation'

import MainScreen from '../Containers/HomePage/index'
import Drawer from '../Containers/Drawer/index'

const BasicApp = StackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
        header: null
      })
    }
  }
)

export default class Navigation extends Component {
  render () {
    return (
      <Drawer {...this.props}>
        <BasicApp />
      </Drawer>
    )
  }
}
