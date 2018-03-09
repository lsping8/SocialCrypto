import React, { PureComponent } from 'react'
import { Container, Thumbnail, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  StyleSheet,
  Image
} from 'react-native'

class DisplayVolume extends PureComponent {
  render () {
    const { price } = this.props
    return (
      <Grid style={{marginTop: 7}}>
        <Row>
          <Col size={70}>
            <Text style={styles.fontLabel}>Current Price</Text>
          </Col>
          <Col size={30}>
            <Text style={styles.fontLabel}>{`$${price}`}</Text>
          </Col>
        </Row>
        <Row>
          <Col size={70}>
            <Text style={styles.fontLabel}>Volume</Text>
          </Col>
          <Col size={30}>
            <Text style={styles.fontVolume}>25678</Text>
          </Col>
        </Row>
        <Row>
          <Col size={70}>
            <Text style={styles.fontLabel}>% Change(24hr)</Text>
          </Col>
          <Col size={30}>
            <Text style={styles.fontPercent}>3%</Text>
          </Col>
        </Row>
        <Row>
          <Col size={70}>
            <Text style={styles.fontLabel}>Volume</Text>
          </Col>
          <Col size={30}>
            <Text style={styles.fontVolume}>25678</Text>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 10,
    position: 'relative',
    top: 14,
    left: 10,
    width: 50
  },
  fontLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5
  },
  fontPercent: {
    fontSize: 12,
    color: 'green'
  },
  fontVolume: {
    fontSize: 12,
    color: 'grey'
  },
  colWidth: {
    width: 100
  }
})

export default DisplayVolume
