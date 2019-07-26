import { StatusBar, Platform } from 'react-native'

/**
 * 设置状态栏颜色
 * @param {*} color     颜色值
 */
export function setStatusBarColor(color) {
  StatusBar.setBarStyle('light-content')
  StatusBar.setHidden(false)
  Platform.OS == 'android' && StatusBar.setTranslucent(true)
  Platform.OS == 'android' && StatusBar.setBackgroundColor(color)
}

module.exports = {
  setStatusBarColor
}
