import React from 'react'
import { StyleSheet, Image, Platform, StatusBar } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Config from './Config'
import Colors from '../res/colors'
import Home from '../containers/Home'
import Account from '../containers/Account'

/**
 * 只放置底部Tab界面
 */
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '组件',
        tabBarLabel: '组件',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../res/images/house.png')
                : require('../res/images/house.png')
            }
          />
        )
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        title: '工具',
        tabBarLabel: '工具',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            style={styles.icon}
            source={
              focused
                ? require('../res/images/person.png')
                : require('../res/images/person.png')
            }
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.THEME.MAIN
    }
  }
)

TabNavigator.navigationOptions = ({ navigation }) => {
  let title = ''
  const index = navigation.state.index
  if (index == 0) {
    title = '组件'
  } else if (index == 1) {
    title = '工具'
  }
  return Config.tabNavigationConfig(
    true,
    title,
    require('../res/images/tab/navigation_bg.png')
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25
  }
})

export default TabNavigator
