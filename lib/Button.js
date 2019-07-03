import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Touchable from './Touchable'

/**
 *   按钮
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-03 15:56
 */
class Button extends React.PureComponent {
  render() {
    return (
      <Touchable>
        <View style={styles.container}>
          <Text>确认</Text>
        </View>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Button
