import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'

import AppNavigator from './AppNavigator'

export { NavigationActions } from 'react-navigation'

/**
 * 获取当前路由名称
 * @param {*} navigationState
 */
export function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

export function app() {
  createNavigationReducer(AppNavigator)
  createReactNavigationReduxMiddleware('root', state => state.router)
  return reduxifyNavigator(AppNavigator, 'root')
}
