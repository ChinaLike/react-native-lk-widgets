import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Touchable from '../lib/Touchable'

/**
 *  选择框
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-25 16:38
 */
class Radio extends Component {
  static defaultProps = {
    type: 'left', //指示器的位置，left-左边 right-右边
    text: '', //文本
    defaultChecked: false, //默认选择状态
    checked: null, //选中
    disabled: false, //禁用
    textSelectColor: '#333333', //文字选中的颜色
    textUnSelectColor: '#333333', //文字未选中颜色
    renderItem: null,
    unSelectImage: require('../res/images/icon_radio_unselect.png'), //未选中时的图片
    selectImage: require('../res/images/icon_radio_select.png') //选中时的图片
  }
  constructor(props) {
    super(props)
    this.state = {
      isSelect: props.defaultChecked
    }
  }
  render() {
    const {
      type,
      text,
      unSelectImage,
      selectImage,
      style,
      textStyle,
      onClick,
      disabled,
      textSelectColor,
      textUnSelectColor,
      checked,
      renderItem
    } = this.props
    let status = this.state.isSelect
    if (checked != null) {
      status = checked
    }
    let radioImage = (
      <Image
        style={[styles.radioImage, style]}
        source={status ? selectImage : unSelectImage}
      />
    )
    let contentLayout = null
    if (renderItem != null) {
      contentLayout = renderItem
    } else {
      contentLayout = (
        <Text
          style={[
            styles.text,
            {
              color: this.state.isSelect ? textSelectColor : textUnSelectColor
            },
            textStyle
          ]}
        >
          {text}
        </Text>
      )
    }
    let radio = (
      <View style={styles.container}>
        {type == 'left' ? radioImage : null}
        {contentLayout}
        {type == 'right' ? radioImage : null}
      </View>
    )
    return disabled ? (
      radio
    ) : (
      <Touchable
        onPress={() => {
          const { isSelect } = this.state
          const currentSelect = !isSelect
          if (checked != null) {
            if (onClick) {
              onClick(checked)
            }
          } else {
            this.setState({
              isSelect: currentSelect
            })
            if (onClick) {
              onClick(currentSelect)
            }
          }
        }}
      >
        {radio}
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {},
  radioImage: {
    margin: 5,
    width: 18,
    height: 18
  }
})

export default Radio
