import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Search } from 'react-native-lk-widgets'

/**
 *
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-30 17:04
 */
class SearchScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '搜索组件'
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
          <Search
            onSubmit={text => {
              alert(text)
            }}
          />
          <Text style={styles.textStyle}>提示</Text>
          <Search
            placeholder="请输入身份证号码"
            onSubmit={text => {
              alert(text)
            }}
          />
          <Text style={styles.textStyle}>默认值</Text>
          <Search
            defaultValue="028"
            onSubmit={text => {
              alert(text)
            }}
          />
          <Text style={styles.textStyle}>不可编辑</Text>
          <Search
            defaultValue="028"
            editable={false}
            onSubmit={text => {
              alert(text)
            }}
          />
          <Text style={styles.textStyle}>自定义背景颜色</Text>
          <Search
            onSubmit={text => {
              alert(text)
            }}
            backgroundColor="#1585ed"
            containerStyle={{ backgroundColor: '#FC8B25' }}
          />
          <Text style={styles.textStyle}>自定义按钮颜色</Text>
          <Search
            onSubmit={text => {
              alert(text)
            }}
            containerStyle={{ borderRadius: 2 }}
            searchButtonStyle={{
              backgroundColor: '#1585ed',
              borderTopLeftRadius: 2,
              borderBottomLeftRadius: 2
            }}
          />
          <Text style={styles.textStyle}>搜索按钮在右边</Text>
          <Search
            onSubmit={text => {
              alert(text)
            }}
            inputStyle={{ height: 36 }}
            searchImageLocal="right"
            containerStyle={{ borderRadius: 4 }}
            searchButtonStyle={{
              backgroundColor: '#1585ed',
              height: 36,
              width: 36,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4
            }}
            searchImageStyle={{ width: 20, height: 20 }}
            searchButtonImage={require('../../res/images/search.png')}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
    marginTop: 10
  }
})

export default SearchScreen
