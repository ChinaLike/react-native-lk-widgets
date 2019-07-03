import React from 'react'
import { StyleSheet, View, Image, Platform, StatusBar } from 'react-native'
import _ from 'lodash'

/**
 * TabNavigator导航栏配置
 * @param {*} title 导航栏标题
 * @param {*} isShowHeader 是否显示导航栏，如果为false，title、backgroundColor、backgroundImage将不起作用
 * @param {*} background 导航栏背景,可配置颜色（支持十六进制、rgb、rgba），图片本地地址
 */
function tabNavigationConfig(isShowHeader, title, background) {
  if (isShowHeader) {
    let headerBackground = null
    let backgroundColor = null

    if (isColor(background)) {
      backgroundColor = background
    } else {
      headerBackground = <Image source={background} style={{ flex: 1 }} />
    }
    return {
      title,
      gesturesEnabled: true,
      headerTitleStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
      },
      headerTransparent: false,
      headerBackground: headerBackground,
      headerStyle: {
        backgroundColor: backgroundColor,
        ...Platform.select({
          android: {
            paddingTop: StatusBar.currentHeight,
            height: 50 + StatusBar.currentHeight
          }
        })
      },
      headerPressColorAndroid: 'rgba(0,0,0,0.2)'
    }
  } else {
    return { header: null }
  }
}

/**
 * 判断是否是颜色值
 * @param {*} color
 */
function isColor(color) {
  if (_.startsWith(color, '#') || _.startsWith(color, 'rgb')) {
    return true
  } else {
    return false
  }
}

/**
 * 带返回导航栏配置
 * @param {*} background 导航栏背景,可配置颜色（支持十六进制、rgb、rgba），图片本地地址
 */
function mainNavigatorConfig(background) {
  let headerBackground = null
  let backgroundColor = null

  if (isColor(background)) {
    backgroundColor = background
  } else {
    headerBackground = <Image source={background} style={{ flex: 1 }} />
  }

  return {
    headerMode: 'screen',
    headerLayoutPreset: 'center',

    navigationOptions: {
      headerBackTitle: '返回',
      headerTintColor: 'white',
      gesturesEnabled: true,
      headerTitleStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
      },
      headerTransparent: false,
      headerBackground: headerBackground,
      headerStyle: {
        backgroundColor: backgroundColor,
        ...Platform.select({
          android: {
            paddingTop: StatusBar.currentHeight,
            height: 50 + StatusBar.currentHeight
          }
        })
      },
      headerPressColorAndroid: 'rgba(0,0,0,0.2)'
    }
  }
}

module.exports = {
  tabNavigationConfig,
  mainNavigatorConfig
}
