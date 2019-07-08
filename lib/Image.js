import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Touchable from './Touchable'

/**
 *   图片显示
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-08 18:05
 */
class Image extends React.PureComponent {
  static defaultProps = {
    source: null,
    width: 80,
    height: 80,
    isCircle: false, //是否是圆形图片
    borderRadius: 0, //圆角
    borderColor: 'white', //边框颜色
    borderWidth: 0, //边框宽度
    style: null,
    onClick: () => {},
    onLongPress: () => {}
  }

  render() {
    const {
      source,
      width,
      height,
      isCircle,
      borderRadius,
      borderColor,
      borderWidth,
      style,
      onClick,
      onLongPress
    } = this.props
    if (source == null) {
      return <View />
    }
    let imageStyle = null
    //判断是否是圆形
    if (isCircle) {
      imageStyle = {
        width: width,
        height: width,
        borderRadius: width / 2,
        borderWidth: borderWidth,
        borderColor: borderColor
      }
    } else {
      imageStyle = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderColor: borderColor
      }
    }

    return (
      <Touchable onPress={onClick} onLongPress={onLongPress}>
        <Image style={[styles.imageStyle, imageStyle, style]} {...this.props} />
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  imageStyle: {}
})

export default Image
