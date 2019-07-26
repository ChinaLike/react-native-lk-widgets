import { createStackNavigator } from 'react-navigation'
import Config from './Config'
import LoginScreen from '../containers/Login'

/**
 * 创建与主Tab平级界面,包括导航栏，如果不需要导航栏，可以在对应组件中设置header:null
 */
const StackNavigator = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen }
  },
  Config.mainNavigatorConfig(require('../res/images/tab/navigation_bg.png'))
)

export default StackNavigator
