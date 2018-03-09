import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'native-base'

class CustomTab extends Component {
  constructor (props) {
    super(props)
    this.setAnimationValue = this.setAnimationValue.bind(this)
    this.iconColor = this.iconColor.bind(this)
  }

  setAnimationValue ({ value }) {
    console.log('anime')
    this.tabIcons.forEach((icon, i) => {
      const progress = Math.min(1, Math.abs(value - i))
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress)
        }
      })
    })
  }

  // color between rgb(59,89,152) and rgb(204,204,204)
  iconColor (progress) {
    const red = 59 + (204 - 59) * progress
    const green = 89 + (204 - 89) * progress
    const blue = 152 + (204 - 152) * progress
    return `rgb(${red}, ${green}, ${blue})`
  }

  render () {
    return (
      <View style={[ styles.tabs, this.props.style ]}>
        {this.props.tabs.map((tab, i) =>
          <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
            <Icon
              name={tab}
              size={30}
              style={{color: `${this.props.activeTab === i ? 'white' : 'grey'}`}}
            />
            <Text style={{color: `${this.props.activeTab === i ? 'white' : 'grey'}`}}>something</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: 'black'
  },
  text: {
    color: 'white'
  }
})

export default CustomTab
