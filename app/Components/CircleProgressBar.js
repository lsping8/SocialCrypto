import React, {Component} from 'react'
import {
  Text,
  Animated,
  StyleSheet,
  Image,
  View
} from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Thumbnail } from 'native-base'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

export default class CircleProgressBar extends Component {
  constructor () {
    super()
    const width = {anim1: 100, anim2: 200}
    this.state = {
      anim1: new Animated.Value(width.anim1),
      anim2: new Animated.Value(width.anim2),
      value: 0
    }
  }

  componentDidMount () {
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * Math.floor(100))
      this.setState({ value: randomValue })
    }, 150)
  }

  render () {
    return (
      <AnimatedCircularProgress
        size={100}
        width={10}
        rotation={0}
        fill={this.state.value}
        tintColor='#00BF9B'
        backgroundColor='#BCC3C7'>
        {
          (fill) => (
            <Image
              style={{ left: 22, top: 22, position: 'absolute', width: 55, height: 55 }}
              source={{uri: 'https://www.cryptocompare.com/media/1383687/pay.png'}}
            />
          )
        }
      </AnimatedCircularProgress>
    )
  }
}

const styles = StyleSheet.create({
  data1: {
    flex: 2,
    flexDirection: 'row'
  },
  data2: {
    flex: 2,
    flexDirection: 'row-reverse'
  },
  dataNumber: {
    color: '#CBCBCB',
    fontSize: 11
  },
  leftBar: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    height: 8,
    marginLeft: 5
  },
  rightBar: {
    alignSelf: 'flex-end',
    borderRadius: 5,
    height: 8,
    marginRight: 5
  },
  points: {
    backgroundColor: '#F55443'
  },
  something: {
    backgroundColor: 'transparent',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 15,
    top: 24,
    left: 8,
    width: 100,
    height: 60
  }
})
