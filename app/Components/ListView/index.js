import React, { PureComponent } from 'react'
import { Container, Thumbnail, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  StyleSheet,
  Image
} from 'react-native'
import CircleProgressBar from '../CircleProgressBar'
import PreviewPrecentage from '../PreviewPrecentage'
import DisplayVolume from '../DisplayVolume'
import DisplayUserCount from '../DisplayUserCount'

class ListView extends PureComponent {
  render () {
    const { coinData } = this.props
    console.log('listProps', this.props.coinData)
    return (
      <Container style={styles.card}>
        <Grid>
          <Col size={30}>
            <Row size={75}>
              <CircleProgressBar />
            </Row>
            <Row size={12} style={styles.coinNameContaner}>
              <Text numberOfLines={1} style={styles.font}>Basic Attention Token Token</Text>
            </Row>
            <Row size={12}>
              <Text style={styles.font2}>{`${coinData.FROMSYMBOL}/${coinData.TOSYMBOL}`}</Text>
            </Row>
          </Col>
          <Col size={45}>
            <Row size={50}>
              <Col style={styles.priceLayout} size={30}>
                <Text numberOfLines={1} style={styles.tokenPriceFont}>{`$${coinData.PRICE}`}</Text>
              </Col>
              <Col size={30}>
                <PreviewPrecentage
                  price={coinData.PRICE}
                />
              </Col>
              <Col size={40}>
                <DisplayUserCount
                  price={coinData.PRICE}
                />
              </Col>
            </Row>
            <Row style={{height: 1, backgroundColor: 'black'}} />
            <Row size={50}>
              <DisplayVolume
                price={coinData.PRICE}
              />
            </Row>
          </Col>
        </Grid>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    margin: 5,
    height: 150,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  coinNameContaner: {
    width: 130,
    marginTop: 12
  },
  font: {
    fontWeight: 'bold',
    fontSize: 12
  },
  priceLayout: {
    alignSelf: 'center',
    marginTop: -10
  },
  font2: {
    fontWeight: 'bold',
    color: '#BCC3C7',
    fontSize: 12
  },
  font3: {
    fontSize: 12
  },
  tokenPriceFont: {
    fontWeight: 'bold',
    fontSize: 17
  },
  iconSize: {
    width: 40,
    height: 40
  }
})

export default ListView
