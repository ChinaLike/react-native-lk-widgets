import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { Text } from 'antd-mobile-rn'
import { connect } from 'react-redux'
import { Button } from 'react-native-lk-widgets'

import { NavigationActions } from '../../utils'

@connect()
class ButtonScreen extends Component {
  static navigationOptions = {
    title: '按钮组件'
  }

  constructor(props) {
    super(props)
    this.state = {
      showLoading: true
    }
  }

  componentDidMount() {}

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textStyle}>默认按钮</Text>
          <Button
            onClick={() => {
              alert('默认按钮')
            }}
          />
          <Text style={styles.textStyle}>带图片的按钮</Text>
          <Button
            source={require('../../res/images/house.png')}
            onClick={() => {
              alert('带图片的按钮')
            }}
          />
          <Text style={styles.textStyle}>进度提示按钮</Text>
          <View style={styles.rowStyle}>
            <Button showLoading={this.state.showLoading} />
            <Button
              text={this.state.showLoading ? '关闭指示器' : '打开指示器'}
              onClick={() => {
                let showLoading = this.state.showLoading
                this.setState({
                  showLoading: !showLoading
                })
              }}
            />
          </View>
          <Text style={styles.textStyle}>带边框的按钮</Text>
          <Button
            borderWidth={1}
            borderColor="#05FFFF"
            onClick={() => {
              alert('带边框的按钮')
            }}
          />
          <Text style={styles.textStyle}>自定义背景按钮</Text>
          <Button
            backgroundColor="orange"
            onClick={() => {
              alert('自定义背景按钮')
            }}
          />
          <Text style={styles.textStyle}>不可用</Text>
          <Button text="不可点击" disabled={true} />
          <Text style={styles.textStyle}>自定义大小</Text>
          <Button
            text="自定义大小"
            style={{ width: 120, height: 30 }}
            textStyle={{ fontSize: 10 }}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
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

export default ButtonScreen
