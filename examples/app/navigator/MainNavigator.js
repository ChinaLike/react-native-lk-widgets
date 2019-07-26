import { Platform, StatusBar } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Config from './Config'
import TabNavigator from './TabNavigator'
import Colors from '../res/colors'
import Detail from '../containers/Detail'
import ButtonScreen from '../containers/Home/ButtonScreen'
import UtilsScreen from '../containers/Home/UtilsScreen'
import SeparatorLineScreen from '../containers/Home/SeparatorLineScreen'
import ImageScreen from '../containers/Home/ImageScreen'
import RadioScreen from '../containers/Home/RadioScreen'

/**
 * 创建与主Tab平级界面，包含导航栏
 */
const MainNavigator = createStackNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    Detail: { screen: Detail },
    ButtonScreen: { screen: ButtonScreen },
    SeparatorLineScreen: { screen: SeparatorLineScreen },
    ImageScreen: { screen: ImageScreen },
    UtilsScreen: { screen: UtilsScreen },
    RadioScreen: { screen: RadioScreen }
  },
  Config.mainNavigatorConfig(require('../res/images/tab/navigation_bg.png'))
)

export default MainNavigator
