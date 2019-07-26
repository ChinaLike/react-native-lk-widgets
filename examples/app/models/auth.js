/**
 *   用户鉴权
 * @ author: Like
 * @ email: like@tydic.com
 * @ date: 2019-07-02 20:26
 */
export default {
  namespace: 'auth',
  state: {
    userInfo: null
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {},
    *logout({ payload }, { call, put }) {}
  },
  subscriptions: {}
}
