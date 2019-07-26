import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Text } from 'antd-mobile-rn'
import { connect } from 'react-redux'
import { SeparatorLine } from 'react-native-lk-widgets'

import { NavigationActions } from '../../utils'

@connect()
class SeparatorLineScreen extends Component {
  static navigationOptions = {
    title: '分割线'
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textStyle}>默认分割线</Text>
          <SeparatorLine />
          <Text style={styles.textStyle}>垂直分割线</Text>
          <View style={{ height: 50 }}>
            <SeparatorLine type="vertical" />
          </View>
          <Text style={styles.textStyle}>自定义颜色分割线</Text>
          <SeparatorLine color="orange" />
          <Text style={styles.textStyle}>自定义大小分割线</Text>
          <SeparatorLine color="orange" width={100} height={10} />
          <Text style={styles.textStyle}>自定义大小分割线</Text>
          <SeparatorLine
            type="vertical"
            color="orange"
            width={30}
            height={10}
          />
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

export default SeparatorLineScreen
