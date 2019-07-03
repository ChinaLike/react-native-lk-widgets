import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, Button } from 'antd-mobile-rn'
import { connect } from 'react-redux'

import { NavigationActions } from '../../utils'

@connect()
class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.props.dispatch(
              NavigationActions.navigate({
                routeName: 'Detail'
              })
            )
          }}
        >
          详情
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 32,
    height: 32
  }
})

export default Home
