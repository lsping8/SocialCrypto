import React, { PureComponent } from 'react'
import PropsTypes from 'prop-types'
import { withApollo } from 'react-apollo'
import { connect } from 'react-redux'
import { setDrawer } from './actions'
import { Container, Button, Text } from 'native-base'
import Drawer from 'react-native-drawer'

class DrawerComponent extends PureComponent {
  render () {
    const { drawerState, setDrawer } = this.props
    return (
      <Container>
        <Drawer
          type='overlay'
          open={drawerState.get('open')}
          content={<Container navigator={this.props.navigator} style={{backgroundColor: 'white'}}><Button><Text>something</Text></Button></Container>}
          onClose={() => setDrawer(false)}
          panOpenMask={0.05}
          tapToClose
          acceptTap
          useInteractionManager
          openDrawerOffset={80}>
          {this.props.children}
        </Drawer>
      </Container>
    )
  }
}
DrawerComponent.propTypes = {
  drawerState: PropsTypes.object,
  setDrawer: PropsTypes.func,
  navigator: PropsTypes.object,
  children: PropsTypes.element
}

const withDataAndState = connect((state) => ({
  drawerState: state.drawerReducer
}), (dispatch) => ({
  setDrawer: setDrawer(dispatch)
}))

export default withDataAndState(withApollo(DrawerComponent))
