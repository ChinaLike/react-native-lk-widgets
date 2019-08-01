import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Touchable from './Touchable'

/**
 * 提示界面（断网提示、空内容提示、异常提示等）
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-08-01 10:01
 */
class EmptyView extends React.PureComponent {
  static defaultProps = {
    source: require('../res/images/img_empty.png'), //图片资源
    text: '' //文字提示
  }

  render() {
    const { onClick, text, source, style, imageStyle, textStyle } = this.props
    return (
      <Touchable
        background={null}
        onPress={() => {
          if (onClick) {
            onClick()
          }
        }}
      >
        <View style={[styles.container, style]}>
          <Image source={source} style={[styles.imageStyle, imageStyle]} />
          <Text style={[styles.textStyle, textStyle]}>{text}</Text>
        </View>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {},
  textStyle: {
    color: '#BBB',
    marginTop: 10
  }
})

export default EmptyView
