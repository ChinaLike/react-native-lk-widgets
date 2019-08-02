import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Checkbox } from 'react-native-lk-widgets'

const test = ['第一排标题', '第二排标题', '第三排标题']

const test1 = [
  { title: '自定义组件显示第一排标题', subTitle: '自定义组件显示第一排副标题' },
  { title: '自定义组件显示第二排标题', subTitle: '自定义组件显示第二排副标题' },
  { title: '自定义组件显示第三排标题', subTitle: '自定义组件显示第三排副标题' }
]
/**
 * 复选框组件
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-08-02 17:00
 */
class CheckboxScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '复选框组件'
    }
  }

  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textStyle}>默认</Text>
          <Checkbox
            data={test}
            onClick={(selectData, index, checked) => {
              alert(
                '你点击的是第' +
                  index +
                  '个，状态为' +
                  checked +
                  ',目前已选择' +
                  JSON.stringify(selectData)
              )
            }}
          />
          <Text style={styles.textStyle}>一行多列</Text>
          <Checkbox
            data={test}
            numColumns={2}
            onClick={(selectData, index, checked) => {
              alert(
                '你点击的是第' +
                  index +
                  '个，状态为' +
                  checked +
                  ',目前已选择' +
                  JSON.stringify(selectData)
              )
            }}
          />
          <Text style={styles.textStyle}>默认选择第二个</Text>
          <Checkbox
            data={test}
            defaultCheckedIndex={1}
            disabled={true}
            onClick={(selectData, index, checked) => {
              alert(
                '你点击的是第' +
                  index +
                  '个，状态为' +
                  checked +
                  ',目前已选择' +
                  JSON.stringify(selectData)
              )
            }}
          />
          <Text style={styles.textStyle}>按钮在右边</Text>
          <Checkbox
            data={test}
            type="right"
            onClick={(selectData, index, checked) => {
              alert(
                '你点击的是第' +
                  index +
                  '个，状态为' +
                  checked +
                  ',目前已选择' +
                  JSON.stringify(selectData)
              )
            }}
          />
          <Text style={styles.textStyle}>自定义背景</Text>
          <Checkbox
            data={test}
            backgroundColor="white"
            onClick={(selectData, index, checked) => {
              alert(
                '你点击的是第' +
                  index +
                  '个，状态为' +
                  checked +
                  ',目前已选择' +
                  JSON.stringify(selectData)
              )
            }}
          />
          <Text style={styles.textStyle}>自定义图片和文字颜色</Text>
          <Checkbox
            data={test}
            backgroundColor="white"
            unSelectImage={require('../../res/images/icon_demo_radio_unselect.png')}
            selectImage={require('../../res/images/icon_demo_radio_select.png')}
            selectTextStyle={{ color: 'green' }}
            unSelectTextStyle={{ color: 'black' }}
            onClick={(selectData, index, checked) => {
              alert(
                '你点击的是第' +
                  index +
                  '个，状态为' +
                  checked +
                  ',目前已选择' +
                  JSON.stringify(selectData)
              )
            }}
          />
          <Text style={styles.textStyle}>自定义组件内容</Text>
          <Checkbox
            data={test1}
            renderItem={(item, index) => {
              return (
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.subTitle}</Text>
                </View>
              )
            }}
            onClick={(selectData, index, checked) => {
              alert(
                '你点击的是第' +
                  index +
                  '个，状态为' +
                  checked +
                  ',目前已选择' +
                  JSON.stringify(selectData)
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

export default CheckboxScreen
