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
        title: '主页',
        tabBarLabel: '主页',
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
        title: '我的',
        tabBarLabel: '我的',
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

/**
 * 设置导航栏样式
 * @param {*} param0
 */
const navigationOptions = ({ navigation }) => {
  let title = ''
  const index = navigation.state.index
  if (index == 0) {
    title = '首页'
  } else if (index == 1) {
    title = '通讯录'
  } else if (index == 2) {
    title = '待办'
  } else if (index == 3) {
    title = '我的'
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
    // headerBackground: (
    //   <Image
    //     source={require('../res/images/tab/navigation_bg.png')}
    //     style={{ flex: 1 }}
    //   />
    // ),
    headerStyle: {
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

TabNavigator.navigationOptions = ({ navigation }) => {
  let title = ''
  const index = navigation.state.index
  if (index == 0) {
    title = '首页'
  } else if (index == 1) {
    title = '通讯录'
  } else if (index == 2) {
    title = '待办'
  } else if (index == 3) {
    title = '我的'
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
