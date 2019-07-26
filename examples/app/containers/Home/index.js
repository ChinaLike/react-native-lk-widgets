import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Text } from 'antd-mobile-rn'
import { connect } from 'react-redux'
import { Button } from 'react-native-lk-widgets'

import { NavigationActions } from '../../utils'

@connect()
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoading: true
    }
  }

  componentDidMount() {}

  _onPress = routeName => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: routeName
      })
    )
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text
            style={styles.textStyle}
            onPress={() => {
              this._onPress('ButtonScreen')
            }}
          >
            按钮
          </Text>
          <Text
            style={styles.textStyle}
            onPress={() => {
              this._onPress('SeparatorLineScreen')
            }}
          >
            分割线
          </Text>
          <Text
            style={styles.textStyle}
            onPress={() => {
              this._onPress('ImageScreen')
            }}
          >
            图片
          </Text>
          <Text
            style={styles.textStyle}
            onPress={() => {
              this._onPress('RadioScreen')
            }}
          >
            单选和多选
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    marginTop: 10
  },
  rowStyle: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Home
