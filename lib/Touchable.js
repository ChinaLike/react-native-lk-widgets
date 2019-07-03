import React, { Component } from 'react'
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View
} from 'react-native'

/**
 *  响应按钮
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-03 11:58
 */
const Touchable = props =>
  Platform.OS == 'ios' ? (
    <TouchableOpacity activeOpacity={0.8} {...props} />
  ) : (
    <TouchableNativeFeedback
      delayPressIn={0}
      background={TouchableNativeFeedback.SelectableBackground()}
      {...props}
    >
      {/* <View style={props.style}>{props.children}</View> */}
    </TouchableNativeFeedback>
  )

export default Touchable
