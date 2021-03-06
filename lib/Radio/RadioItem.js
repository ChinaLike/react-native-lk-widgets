import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Touchable from '../Touchable'

/**
 *  单选框Item
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-25 16:38
 * @ params
 *  type:Radio图片的位置 left - 左边  right - 右边
 *  text:显示标题,renderItem存在时无效
 *  checked:单选框是否被选中
 *  disabled:单选框禁用点击事件
 *  unSelectImage:未选中Radio的图片样式
 *  selectImage:选中Radio的图片样式
 *  imageStyle:Radio样式
 *  renderItem:自定义布局
 *  selectTextStyle:选中时文本样式,renderItem存在时无效
 *  unSelectTextStyle:未选中时文本样式,renderItem存在时无效
 *  itemStyle:item样式
 *  onClick:点击事件
 */
class RadioItem extends Component {
  static defaultProps = {
    type: 'left', //指示器的位置，left-左边 right-右边
    text: '', //文本
    checked: false, //单选框是否被选中
    disabled: false, //单选框禁用点击事件
    unSelectImage: require('../../res/images/icon_radio_unselect.png'), //未选中时的图片
    selectImage: require('../../res/images/icon_radio_select.png') //选中时的图片
  }
  constructor(props) {
    super(props)
  }

  _radioImage = () => {
    const { checked, unSelectImage, selectImage, imageStyle } = this.props
    return (
      <Image
        source={checked ? selectImage : unSelectImage}
        style={[styles.radioImage, imageStyle]}
      />
    )
  }

  _contentView = () => {
    const {
      checked,
      text,
      renderItem,
      selectTextStyle,
      unSelectTextStyle
    } = this.props
    return renderItem ? (
      renderItem
    ) : (
      <Text
        style={[styles.text, checked ? selectTextStyle : unSelectTextStyle]}
      >
        {text}
      </Text>
    )
  }

  _item = () => {
    const { type, itemStyle } = this.props
    let leftRadioImage
    let rightRadioImage
    if (type == 'left') {
      leftRadioImage = this._radioImage()
    } else if (type == 'right') {
      rightRadioImage = this._radioImage()
    }
    return (
      <View style={[styles.container, itemStyle]}>
        {leftRadioImage}
        {this._contentView()}
        {rightRadioImage}
      </View>
    )
  }

  render() {
    const { onClick, disabled } = this.props

    return disabled ? (
      this._item()
    ) : onClick ? (
      <Touchable onPress={onClick}>{this._item()}</Touchable>
    ) : (
      this._item()
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flex: 1
  },
  radioImage: {
    margin: 5,
    width: 18,
    height: 18
  }
})

export default RadioItem
