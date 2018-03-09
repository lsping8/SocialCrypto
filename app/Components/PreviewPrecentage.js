import React, { PureComponent } from 'react'
import { Container, Thumbnail, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  StyleSheet,
  Image
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class PreviewPrecentage extends PureComponent {
  render () {
    return (
      <Grid style={{marginTop: -5}}>
        <Row size={50} >
          <Col size={40}>
            <Ionicons name='md-arrow-round-up' color='green' size={30} />
          </Col>
          <Col size={60} style={styles.fontLayout}>
            <Text style={styles.fontUp}>60%</Text>
          </Col>
        </Row>
        <Row size={50}>
          <Col size={40}>
            <Ionicons name='md-arrow-round-down' color='red' size={30} />
          </Col>
          <Col size={60} style={styles.fontLayout}>
            <Text style={styles.fontDown}>40%</Text>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  gridContainer: {
    position: 'relative',
    top: 14,
    left: 10,
    width: 50
  },
  font: {
    fontWeight: 'bold',
    fontSize: 17
  },
  fontLayout: {
    justifyContent: 'center',
    padding: 'auto'
  },
  fontUp: {
    fontSize: 17,
    color: 'green'
  },
  fontDown: {
    fontSize: 17,
    color: 'red'
  },
  iconPadding: {
    width: 40,
    height: 40
  }
})

export default PreviewPrecentage
