import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

/**
 *   分割线
 * @ author: Like
 * @ email: like@tydic.com
 * @ data: 2019-04-25 20:12
 * @ params: type:方向  -horizontal：水平   -vertical：垂直
 *           color:颜色
 *           width:线宽
 */
class SeparatorLine extends React.PureComponent {
  static defaultProps = {
    type: 'horizontal',
    color: '#E3E3E3',
    width: '100%',
    height: 0.5
  }
  constructor(props) {
    super(props)
  }

  render() {
    const { type, color, width, height } = this.props
    let lineStyle = {
      backgroundColor: color,
      width: type == 'vertical' ? height : width,
      height: type == 'vertical' ? width : height
    }
    return <View style={[styles.container, lineStyle, this.props.style]} />
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  }
})

export default SeparatorLine
