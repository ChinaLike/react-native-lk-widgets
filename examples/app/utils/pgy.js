import { Platform, Alert, Linking } from 'react-native'

/**
 * 获取App在蒲公英的短连接信息
 * @param {*} shortcut
 * @param {*} _api_key
 */
export const getPgyVersionInfo = (shortcut, _api_key, callback) => {
  fetch('https://www.pgyer.com/apiv2/app/getByShortcut', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    body: `buildShortcutUrl=${shortcut}&_api_key=${_api_key}`
  })
    .then(response => response.json())
    .then(responseJson => {
      callback(responseJson.data)
    })
    .catch(error => {
      alert(error)
    })
}
/**
 * 提示更新
 * @param {*} version  当前版本
 * @param {*} buildVersion  服务器版本
 */
export const hintUpdate = (version, buildVersion, onPress) => {
  if (version < buildVersion) {
    Alert.alert(
      '提示',
      '检测到有最新' + `${buildVersion}` + '版本，是否现在更新呢？',
      [
        { text: '取消' },
        {
          text: '更新',
          onPress: onPress
        }
      ]
    )
  } else {
    Alert.alert('提示', '已经是最新版本', [
      {
        text: '确定',
        onPress: () => {}
      }
    ])
  }
}
/**
 * 跳转网页进行下载
 * @param {*} url
 */
export const linking = (buildKey, _api_key, password) => {
  if (Platform.OS == 'ios') {
    Linking.openURL(
      `itms-services://?action=download-manifest&url=https://www.pgyer.com/app/plist/${buildKey}`
    )
  } else {
    Linking.openURL(
      `http://www.pgyer.com/apiv1/app/install?_api_key=${_api_key}&aKey=${buildKey}&password=${password}`
    )
  }
}
