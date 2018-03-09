import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import {
  StyleSheet,
  ScrollView,
  Button,
  Text,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { gql, graphql, compose, withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import { Container, Header, Input, Icon, Item } from 'native-base'
import isNull from 'lodash/isNull'

import { setSearch } from './actions'
import { setDrawer } from '../Drawer/actions'
import ForecastComponent from '../../Components/ForecastComponent'
import CustomTabBar from '../../Components/CustomTab'
import ListView from '../../Components/ListView'
import TopComment from '../../Components/TopComment'

const coinList = [
  {
    FROMSYMBOL: 'BTC',
    TOSYMBOL: 'BTC',
    PRICE: '100'
  },
  {
    FROMSYMBOL: 'BTC',
    TOSYMBOL: 'BTC',
    PRICE: '1000'
  },
  {
    FROMSYMBOL: 'BTC',
    TOSYMBOL: 'BTC',
    PRICE: '10000'
  }
]

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      token: ''
    }
    this.scroll = null
    this.something = []
    this.populate = false
    this.populateData = this.populateData.bind(this)
  }

  populateData () {
    const { data } = this.props
    this.setState({ loading: true })
    let i
    console.log('populate')
    data.coinList.map((data) => (
      <ListView
        key={'listView' + this.something.length + i}
      />
    ))
    // if (!isNull(this.scroll)) {
    //   // this.scroll.scrollTo({y: 1000, animated: false})
    //   this.setState({ loading: false }, () => {
    //     this.populate = false
    //   })
    // }
  }

  render () {
    const { setDrawer, setSearch, homePageState } = this.props
    // const { homepage } = this.props.data
    // if (this.props.data.loading) {
    //   return (
    //     <Container>
    //       <ActivityIndicator style={styles.content} />
    //     </Container>
    //   )
    // }
    console.log('data', this.props.data)
    return (
      <Container>
        <Header searchBar rounded style={styles.headerStyle} androidStatusBarColor='#A9A9A9'>
          <Item style={{backgroundColor: 'grey', width: 100}}>
            <Icon
              ios={homePageState.get('focus') ? 'ios-search' : 'ios-menu'}
              android={homePageState.get('focus') ? 'md-search' : 'md-menu'}
              style={{color: '#FFFFFF'}}
              onPress={() => homePageState.get('focus') ? null : setDrawer(true)}
            />
            <Input placeholder='Search' onFocus={() => setSearch(true)} onBlur={() => setSearch(false)} />
            <Icon name='ios-people' style={{color: '#FFFFFF'}} />
          </Item>
        </Header>
        <Container tabLabel='ios-paper'>
          <TopComment />
          <ForecastComponent date={'24 july 2018'} />
          <ScrollView
            style={styles.tabView}
            key={'something'}
            ref={(node) => { this.scroll = node }}
            scrollEventThrottle={30}
            onScroll={(event) => {
              if ((event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height) === event.nativeEvent.contentOffset.y) {
                if (!this.populate) {
                  // this.populate = true
                  // this.populateData()
                }
              }
            }}
          >
            {
              coinList.map((data, index) => (
                <ListView
                  key={'listView' + data.FROMSYMBOL + index}
                  coinData={data}
                />
              ))
            }
          </ScrollView>
        </Container>
        {/* <ScrollableTabView
          renderTabBar={() => <CustomTabBar />}
          tabBarPosition='bottom'
        >
          <Container tabLabel='ios-paper'>
            <TopComment />
            <ForecastComponent date={'24 july 2018'} />
            <ScrollView style={styles.tabView} key={'something'}>
              {this.something}
            </ScrollView>
          </Container>
          <ScrollView tabLabel='ios-people' style={styles.tabView} key={'something2'}>
            <ListView />
          </ScrollView>
        </ScrollableTabView> */}
      </Container>
    )
  }
}
HomeScreen.propTypes = {
  setDrawer: PropsTypes.func,
  setSearch: PropsTypes.func,
  homePageState: PropsTypes.object
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.01)'
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: '100%',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  headerStyle: {
    paddingTop: 0,
    backgroundColor: 'black'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const homepage = gql`
  query homepage{
    homepage{
      coinList{
        FROMSYMBOL
        TOSYMBOL
        PRICE
        LASTVOLUME
        OPEN24HOUR
        MKTCAP
      }
    }
  }
`

const testingGql = graphql(homepage)

const withDataAndState = connect((state) => ({
  homePageState: state.homePageReducer
}), (dispatch) => ({
  setDrawer: setDrawer(dispatch),
  setSearch: setSearch(dispatch)
}))

// export default compose(
//   testingGql
// )(withDataAndState(withApollo(HomeScreen)))

export default withDataAndState(withApollo(HomeScreen))
