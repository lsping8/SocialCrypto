import React, { PureComponent } from 'react'
import { Container, Thumbnail, Text } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import {
  StyleSheet,
  Image,
  View
} from 'react-native'

class TopComment extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Grid>
          <Row size={60}>
            <Col size={25}>
              <View style={styles.imageContainer}>
                <Thumbnail
                  large
                  source={{uri: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'}} />
              </View>
            </Col>
            <Col size={75} >
              <Row>
                <Col size={35}>
                  <View style={styles.coinContainer}>
                    <Image
                      style={{height: 40, width: 40}}
                      source={{uri: 'https://www.cryptocompare.com/media/1383687/pay.png'}}
                    />
                  </View>
                  <View style={styles.textContainer}><Text numberOfLines={1} style={styles.fontCoinName}>Basic Attention Token</Text></View>
                </Col>
                <Col size={30}>
                  <View style={styles.text2Container}><Text style={styles.font3}>Current Price</Text></View>
                  <View style={styles.text2Container}><Text style={styles.font3}>Forecast Price</Text></View>
                  <View style={styles.text2Container}><Text style={styles.font3}>Different</Text></View>
                </Col>
                <Col size={15}>
                  <View style={styles.text2Container}><Text numberOfLines={1} style={styles.font3}>$30000</Text></View>
                  <View style={styles.text2Container}><Text numberOfLines={1} style={styles.font3}>$400</Text></View>
                  <View style={styles.text2Container}><Text numberOfLines={1} style={styles.font3}>20%</Text></View>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row size={40}>
            <Col size={25}>
              <View style={styles.nameContainer}><Text numberOfLines={1} style={styles.fontName}>Super User</Text></View>
              <View style={styles.textContainer}><Text style={styles.fontRank}>Rank 6</Text></View>
            </Col>
            <Col size={75}>
              <View style={{ backgroundColor: 'black', height: 1, marginBottom: 5 }} />
              <Text numberOfLines={3} style={styles.fontComment}>very looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog message!</Text>
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#BCC3C7',
    padding: 10
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  textContainer: {
    alignItems: 'center'
  },
  text2Container: {
    marginBottom: 3
  },
  coinContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  font: {
    fontWeight: 'bold',
    fontSize: 17
  },
  font2: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: '#BCC3C7',
    fontSize: 12,
    bottom: 0
  },
  font3: {
    fontSize: 12,
    marginBottom: 3,
    fontWeight: 'bold'
  },
  fontCoinName: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 2
  },
  fontName: {
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: -10
  },
  fontRank: {
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: -10
  },
  fontComment: {
    fontSize: 12
  }
})

export default TopComment
