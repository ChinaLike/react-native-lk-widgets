import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { Animated, Easing } from 'react-native'
import StackNavigator from './StackNavigator'
import MainNavigator from './MainNavigator'
import Login from '../containers/Login'

/**
 * 界面配置文件,只放置无导航栏的界面
 */
const config = {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const { index } = scene

      const height = layout.initHeight
      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0]
      })

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      })

      return { opacity, transform: [{ translateY }] }
    }
  })
}

const AppNavigator = createSwitchNavigator(
  {
    StackNavigator: { screen: StackNavigator },
    Main: { screen: MainNavigator }
  },
  config
)

export default AppNavigator
