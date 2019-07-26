import React, { Component } from 'react'
import { StyleSheet, View, Text, Image as ImageReact } from 'react-native'
import Touchable from './Touchable'

/**
 *   图片显示
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-08 18:05
 */
class Image extends React.PureComponent {
  static defaultProps = {}
  constructor(props) {
    super(props)
  }

  render() {
    const { onClick, onLongPress } = this.props

    return (
      <Touchable onPress={onClick} onLongPress={onLongPress}>
        <ImageReact {...this.props} />
      </Touchable>
    )
  }
}
export default Image
