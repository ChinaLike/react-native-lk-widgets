import React, { Component } from 'react'
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import { Button, Touchable } from '../../components'

import { createAction, NavigationActions } from '../../utils'

@connect(({ auth }) => ({ ...auth }))
class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          text="登录"
          onPress={() => {
            this.props.dispatch(
              NavigationActions.navigate({
                routeName: 'Main'
              })
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Login
