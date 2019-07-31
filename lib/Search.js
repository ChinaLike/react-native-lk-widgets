import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Image } from 'react-native'
import Touchable from './Touchable'

/**
 * 搜索框
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-30 16:52
 */
class Search extends Component {
  static defaultProps = {
    searchButtonImage: require('../res/images/icon_search.png'), //搜索按钮图片
    editable: true,
    defaultValue: '',
    placeholder: '',
    searchImageLocal: 'left', //搜索按钮位置
    returnKeyType: 'search', //键盘按钮
    searchButtonStyle: null, //搜索按钮样式
    backgroundColor: 'white' //背景颜色
  }

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.defaultValue
    }
  }

  /**
   * 搜索
   */
  _onSubmit = () => {
    const { onSubmit } = this.props
    if (onSubmit) {
      onSubmit(this.state.text)
    }
  }

  render() {
    const {
      editable,
      backgroundColor,
      searchButtonStyle,
      style,
      containerStyle,
      defaultValue,
      placeholder,
      returnKeyType,
      searchImageStyle,
      searchImageLocal,
      inputStyle
    } = this.props
    let leftButtonView = null
    let rightButtonView = null
    if (searchImageLocal == 'left') {
      leftButtonView = (
        <Touchable onPress={this._onSubmit} background={null}>
          <View style={[styles.searchButton, searchButtonStyle]}>
            <Image
              source={this.props.searchButtonImage}
              style={[styles.searchImage, searchImageStyle]}
            />
          </View>
        </Touchable>
      )
    } else if (searchImageLocal == 'right') {
      rightButtonView = (
        <Touchable onPress={this._onSubmit}>
          <View style={[styles.searchButton, searchButtonStyle]}>
            <Image
              source={this.props.searchButtonImage}
              style={[styles.searchImage, searchImageStyle]}
            />
          </View>
        </Touchable>
      )
    }

    return (
      <View style={[styles.container, { backgroundColor }, style]}>
        <View style={[styles.containerStyle, containerStyle]}>
          {leftButtonView}
          <TextInput
            placeholder={placeholder}
            style={[styles.inputStyle, inputStyle]}
            editable={editable}
            value={this.state.value}
            defaultValue={defaultValue}
            returnKeyType={returnKeyType}
            onSubmitEditing={e => {
              this._onSubmit()
            }}
            onChangeText={text => {
              this.setState({
                text
              })
            }}
          />
          {rightButtonView}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 15
  },
  inputStyle: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 28
  },
  searchImage: {
    width: 15,
    height: 15
  }
})

export default Search
