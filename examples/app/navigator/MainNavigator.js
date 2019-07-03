import { Platform, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Config from './Config'
import TabNavigator from './TabNavigator'
import Colors from '../res/colors'
import Detail from '../containers/Detail'

/**
 * 创建与主Tab平级界面，包含导航栏
 */
const MainNavigator = createStackNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    Detail: { screen: Detail }
  },
  Config.mainNavigatorConfig(require('../res/images/tab/navigation_bg.png'))
)

export default MainNavigator
