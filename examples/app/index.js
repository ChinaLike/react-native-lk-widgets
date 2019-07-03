import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './utils/dva'
import Router from './router'
import { routerMiddleware, routerReducer } from './navigator'
import { registerModels } from './models'

const app = dva({
  initialState: {},
  models: registerModels,
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  }
})

const App = app.start(<Router />)

AppRegistry.registerComponent('DvaFrame', () => App)
