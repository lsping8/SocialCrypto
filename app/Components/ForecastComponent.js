import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Container } from 'native-base'

import PropsTypes from 'prop-types'

const styles = StyleSheet.create({
  forecastBar: {
    backgroundColor: '#424242',
    height: 30,
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    marginLeft: 10
  }
})

class ForecastComponent extends Component {
  render () {
    return (
      <View style={styles.forecastBar}>
        <Text style={styles.textStyle}>{`Forecast ${this.props.date}`}</Text>
      </View>
    )
  }
}
ForecastComponent.propTypes = {

}

export default ForecastComponent
