import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Radio } from 'react-native-lk-widgets'
import _ from 'lodash'

const test = ['第一排标题', '第二排标题', '第三排标题']

const test1 = [
  { title: '自定义组件显示第一排标题', subTitle: '自定义组件显示第一排副标题' },
  { title: '自定义组件显示第二排标题', subTitle: '自定义组件显示第二排副标题' },
  { title: '自定义组件显示第三排标题', subTitle: '自定义组件显示第三排副标题' }
]

/**
 *  单选组件
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-26 09:23
 */
class RadioScreen extends Component {
  static navigationOptions = {
    title: '单选组件'
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
            data={test}
            onClick={(item, index) => {
              alert('你选择的是第' + index + '个，内容为' + item)
            }}
          />
          <Text style={styles.textStyle}>一行多列</Text>
          <Radio
            data={test}
            numColumns={2}
            onClick={(item, index) => {
              alert('你选择的是第' + index + '个，内容为' + item)
            }}
          />
          <Text style={styles.textStyle}>默认选择第二个</Text>
          <Radio
            data={test}
            defaultCheckedIndex={1}
            disabled={true}
            onClick={(item, index) => {
              alert('你选择的是第' + index + '个，内容为' + item)
            }}
          />
          <Text style={styles.textStyle}>按钮在右边</Text>
          <Radio
            data={test}
            type="right"
            onClick={(item, index) => {
              alert('你选择的是第' + index + '个，内容为' + item)
            }}
          />
          <Text style={styles.textStyle}>自定义背景</Text>
          <Radio
            data={test}
            backgroundColor="white"
            onClick={(item, index) => {
              alert('你选择的是第' + index + '个，内容为' + item)
            }}
          />
          <Text style={styles.textStyle}>自定义图片和文字颜色</Text>
          <Radio
            data={test}
            backgroundColor="white"
            unSelectImage={require('../../res/images/icon_demo_radio_unselect.png')}
            selectImage={require('../../res/images/icon_demo_radio_select.png')}
            selectTextStyle={{ color: 'green' }}
            unSelectTextStyle={{ color: 'black' }}
            onClick={(item, index) => {
              alert('你选择的是第' + index + '个，内容为' + item)
            }}
          />
          <Text style={styles.textStyle}>自定义组件内容</Text>
          <Radio
            data={test1}
            renderItem={(item, index) => {
              return (
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.subTitle}</Text>
                </View>
              )
            }}
            onClick={(item, index) => {
              alert(
                '你选择的是第' + index + '个，内容为' + JSON.stringify(item)
              )
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // padding: 10
  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    marginTop: 10
  }
})

export default RadioScreen
