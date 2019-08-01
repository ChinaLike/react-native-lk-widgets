import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { EmptyView } from 'react-native-lk-widgets'

/**
 *   提示界面
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-08-01 10:31
 */
class EmptyViewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '提示界面'
    }
  }

  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <EmptyView
          text="点击空白处弹窗"
          onClick={() => {
            alert()
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default EmptyViewScreen
