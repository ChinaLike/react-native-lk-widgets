import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TextInput } from 'react-native-lk-widgets'

/**
 *
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-30 15:04
 */
class TextInputScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '输入组件'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>默认</Text>
        <TextInput
          onChangeText={value => {
            this.setState({
              value
            })
          }}
        />
        <Text style={styles.textStyle}>带清除按钮</Text>
        <TextInput
          showClearButton={true}
          onClear={() => {
            this.setState({
              value: ''
            })
          }}
        />
        <Text style={styles.textStyle}>自定义背景颜色</Text>
        <TextInput
          defaultValue="123"
          style={{
            backgroundColor: 'orange'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    marginTop: 10
  }
})

export default TextInputScreen
