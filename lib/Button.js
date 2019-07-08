import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
import Touchable from './Touchable'

/**
 *   按钮
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-03 15:56
 */
class Button extends React.PureComponent {
  static defaultProps = {
    text: '确认', //文字
    backgroundColor: '#00CED1', //背景颜色
    textColor: 'white', //文本颜色
    borderColor: '#00CED1', //边框颜色
    indicatorColor: 'white', //指示器颜色
    disabledBackgroundColor: 'gray', //不可用状态背景颜色
    disabledTextColor: 'white', //不可用状态文字颜色

    style: null, //按钮样式
    textStyle: null, //文字样式
    loadingStyle: null, //进度加载样式，同ActivityIndicator属性
    imageStyle: null, //图片样式

    source: null, //图片加载地址

    borderRadius: 5, //圆角大小
    borderWidth: 0, //边框宽度
    indicatorSize: 20, //指示器大小，支持small和large  Small has a height of 20, large has a height of 36

    showLoading: false, //显示进度指示器

    disabled: false, //设置禁用
    onClick: () => {} //点击事件
  }

  render() {
    const {
      text,
      backgroundColor,
      textColor,
      borderColor,
      style,
      textStyle,
      loadingStyle,
      imageStyle,
      source,
      borderRadius,
      borderWidth,
      showLoading,
      disabled,
      onClick,
      disabledBackgroundColor,
      disabledTextColor,
      indicatorColor,
      indicatorSize
    } = this.props
    //图片显示
    let imageLayout = null
    if (source) {
      imageLayout = (
        <Image source={source} style={[styles.imageStyle, imageStyle]} />
      )
    }

    //进度加载显示
    let activityIndicatorLayout = null
    if (showLoading) {
      activityIndicatorLayout = (
        <ActivityIndicator
          size={indicatorSize}
          color={indicatorColor}
          style={[styles.activityIndicatorStyle, loadingStyle]}
        />
      )
    }

    return (
      <Touchable
        onPress={() => {
          !disabled && onClick()
        }}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor: disabled
                ? disabledBackgroundColor
                : backgroundColor,
              borderRadius: borderRadius,
              borderColor: borderColor,
              borderWidth: borderWidth
            },
            style
          ]}
        >
          {activityIndicatorLayout}
          {imageLayout}
          <Text
            style={[
              styles.textStyle,
              { color: disabled ? disabledTextColor : textColor },
              textStyle
            ]}
          >
            {text}
          </Text>
        </View>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 50
  },
  textStyle: {},
  imageStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 5
  },
  activityIndicatorStyle: {
    marginHorizontal: 5
  }
})

export default Button
