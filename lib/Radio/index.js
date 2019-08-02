import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import RadioItem from './RadioItem'

/**
 *  单选框
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-08-01 16:16
 * @ params
 *  data:显示的数据数组,如果数组中是对象，请用renderItem自定义布局
 *  defaultCheckedIndex:默认选中哪一个
 *  numColumns:布局一行几列
 *  type:Radio图片的位置 left - 左边  right - 右边
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
class Radio extends React.PureComponent {
  static defaultProps = {
    data: [],
    defaultCheckedIndex: -1, //默认选中第几个元素
    numColumns: 1, //布局一行几列
    backgroundColor: 'transparent' //背景颜色
  }

  constructor(props) {
    super(props)
    const { data, defaultCheckedIndex } = this.props
    this.state = {
      selectIndex:
        data && data.length > defaultCheckedIndex ? defaultCheckedIndex : -1
    }
  }

  _renderItem = ({ item, index }) => {
    const { renderItem, onClick } = this.props
    const { selectIndex } = this.state
    return renderItem ? (
      <RadioItem
        {...this.props}
        renderItem={renderItem(item, index)}
        checked={selectIndex == index}
        onClick={() => {
          this.setState({
            selectIndex: index
          })
          if (onClick) {
            onClick(item, index)
          }
        }}
      />
    ) : (
      <RadioItem
        {...this.props}
        text={item + ''}
        checked={selectIndex == index}
        onClick={() => {
          this.setState({
            selectIndex: index
          })
          if (onClick) {
            onClick(item, index)
          }
        }}
      />
    )
  }

  _keyExtractor = (item, index) => {
    return 'Radio' + index
  }

  render() {
    const { data, numColumns, backgroundColor, style } = this.props
    return data ? (
      <FlatList
        {...this.props}
        data={data}
        style={[{ backgroundColor: backgroundColor }, style]}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        numColumns={numColumns}
      />
    ) : null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Radio
