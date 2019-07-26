import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Radio } from 'react-native-lk-widgets'
import _ from 'lodash'

const test = [
  {
    name: '第一排标题'
  },
  {
    name: '第二排标题'
  },
  {
    name: '第三排标题'
  }
]

/**
 *
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-26 09:23
 */
class RadioScreen extends Component {
  static navigationOptions = {
    title: '单选和多选'
  }

  state = {
    index: 0
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textStyle}>默认</Text>
          <Radio
            text="选择按钮"
            onClick={status => {
              alert(status)
            }}
          />
          <Text style={styles.textStyle}>自定义按钮</Text>
          <Radio
            text="选择按钮"
            unSelectImage={require('../../res/images/icon_demo_radio_unselect.png')}
            selectImage={require('../../res/images/icon_demo_radio_select.png')}
            onClick={status => {
              alert(status)
            }}
          />
          <Text style={styles.textStyle}>右侧</Text>
          <Radio
            type="right"
            text="选择按钮"
            onClick={status => {
              alert(status)
            }}
          />
          <Text style={styles.textStyle}>不可用</Text>
          <Radio
            disabled={true}
            text="选择按钮"
            onClick={status => {
              alert(status)
            }}
          />
          <Text style={styles.textStyle}>自定义文字颜色</Text>
          <Radio
            textSelectColor="orange"
            textUnSelectColor="blue"
            text="选择按钮"
            onClick={status => {
              alert(status)
            }}
          />
          <Text style={styles.textStyle}>自定义内容</Text>
          <Radio
            renderItem={
              <View>
                <Text>标题</Text>
                <Text>内容</Text>
              </View>
            }
          />
          <Text style={styles.textStyle}>自定义是否选中</Text>
          <Radio checked={true} text="自定义是否选中" />
          <Text style={styles.textStyle}>单选</Text>
          {_.map(test, (value, index) => {
            return (
              <Radio
                checked={this.state.index == index}
                text={value.name}
                onClick={() => {
                  this.setState({ index: index })
                }}
              />
            )
          })}
          <Text style={styles.textStyle}>多选</Text>
          {_.map(test, (value, index) => {
            return <Radio text={value.name} onClick={() => {}} />
          })}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    marginTop: 10
  }
})

export default RadioScreen
