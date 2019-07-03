import { DeviceEventEmitter } from 'react-native'
import { Toast } from 'antd-mobile-rn'
import QueryString from 'query-string'
import { DEBUG } from '../config'

/**
 * 超时
 */
const TIME_OUT = 15000

const TIME_OUT_MESSAGE = 'Request timed out'

const defaultResultData = {
  code: -1,
  message: '请求失败',
  data: null
}

/**
 * 请求超时封装
 * @param {*} url
 * @param {*} options
 */
const fetchData = (url, options) => {
  const request = new Promise((resolve, reject) => {
    fetch(url, options)
      // 请求状态成功，解析请求数据
      .then(res => {
        const status = res.status
        if (status >= 200 && status < 300) {
          return res.json()
        } else if (status == 401) {
          DeviceEventEmitter.emit('ReLogin')
        }
        reject(`${status}`)
      })
      // 返回请求的数据
      .then(responseJson => {
        resolve(responseJson)
      })
      // 返回错误
      .catch(e => reject(e.message))
  })
  // 定义一个延时函数
  const timeoutRequest = new Promise((resolve, reject) => {
    setTimeout(reject, TIME_OUT, TIME_OUT_MESSAGE)
  })
  // 竞时函数，谁先完成调用谁
  return Promise.race([request, timeoutRequest]).then(
    res => {
      return res
    },
    m => {
      throw new Error(m)
    }
  )
}

/**
 * 请求数据
 *
 * @param  {string} url       完整URL
 * @param  {object} [options]  参数
 */
export default async function request(url, options) {
  let newUrl = url
  if (DEBUG) {
    newUrl = global.BASE_URL + url
  }
  let defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    ...options
  }
  // GET拼参数到URL后
  if (defaultOptions.method == 'GET' || defaultOptions.method == 'PUT') {
    newUrl = newUrl + '?' + QueryString.stringify(defaultOptions.query)
  }
  //设置header
  if (global.token) {
    defaultOptions.headers['Authorization'] = 'Bearer ' + global.token
  }

  let data = defaultResultData
  try {
    data = await fetchData(newUrl, defaultOptions)
    console.log(data)
  } catch (error) {
    if (error.toString().indexOf(TIME_OUT_MESSAGE) > 0) {
      Toast.show('网络超时')
    } else {
      Toast.show('网络错误')
    }
    console.log('网络错误：' + error)
  }

  return data
}
