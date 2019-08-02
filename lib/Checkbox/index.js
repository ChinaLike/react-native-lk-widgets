import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import CheckboxItem from './CheckboxItem'

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
 *  onClick:点击事件,第一个参数表示已选择数据，第二个表示当前点击的下标，第三个表示当前状态
 */
class Checkbox extends React.PureComponent {
  static defaultProps = {
    data: [],
    defaultCheckedIndex: -1, //默认选中第几个元素
    numColumns: 1, //布局一行几列
    backgroundColor: 'transparent' //背景颜色
  }

  constructor(props) {
    super(props)
    this.state = {
      selectIndex: [] //选中的数据下标
    }
  }

  _onClick = (item, index, checked) => {
    const { onClick, data } = this.props
    const { selectIndex } = this.state
    let newSelectIndex = []
    if (checked) {
      //选中
      if (selectIndex) {
        newSelectIndex = selectIndex
        if (selectIndex.indexOf(index) < 0) {
          newSelectIndex.push(index)
        }
      }
    } else {
      if (selectIndex) {
        selectIndex.forEach(element => {
          if (element != index) {
            newSelectIndex.push(element)
          }
        })
      }
    }
    this.setState({
      selectIndex: newSelectIndex
    })
    if (onClick) {
      let selectData = []
      newSelectIndex.forEach(element => {
        selectData.push(data[element])
      })
      onClick(selectData, index, checked)
    }
  }

  _renderItem = ({ item, index }) => {
    const { renderItem } = this.props
    return renderItem ? (
      <CheckboxItem
        {...this.props}
        renderItem={renderItem(item, index)}
        onClick={checked => {
          this._onClick(item, index, checked)
        }}
      />
    ) : (
      <CheckboxItem
        {...this.props}
        text={item + ''}
        onClick={checked => {
          this._onClick(item, index, checked)
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

export default Checkbox
