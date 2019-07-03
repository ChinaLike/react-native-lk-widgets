import { createAction, NavigationActions, Storage } from '../utils'
import { USER_STORAGE_KEY, TOKEN_STORAGE_KEY } from '../config/StorageConfig'
import * as authService from '../services/auth'

export default {
  namespace: 'app',
  state: {},
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const userInfo = yield call(Storage.get, USER_STORAGE_KEY, false)
      if (userInfo) {
        //有用户信息直接跳转主页
        const token = yield call(Storage.get, TOKEN_STORAGE_KEY, '')
        global.token = token
        yield put(createAction('auth/updateState')({ userInfo }))
        yield put(NavigationActions.navigate({ routeName: 'Main' }))
      } else {
        // 无登陆信息跳转到登陆页面
      }
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    }
  }
}
