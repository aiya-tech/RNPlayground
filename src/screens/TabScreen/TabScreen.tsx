import React, {useEffect} from 'react'
import {GestureResponderEvent, Image, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './TabScreenStyles'
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {RouteProp} from '@react-navigation/native'
import HomeScreen from '../HomeScreen'
import MeScreen from '../MeScreen'

const Tab = createBottomTabNavigator()

const names = {
  Home: '首页',
  Me: '我的',
} as Record<string, string>

const images: Record<string, any> = {
  Home: require('~/assets/images/home.png'),
  'Home-fill': require('~/assets/images/home-fill.png'),
  Me: require('~/assets/images/me.png'),
  'Me-fill': require('~/assets/images/me-fill.png'),
}

const TabScreen: React.FC = () => {

  const screenOptions = ({route, navigation}: {route: RouteProp<any, any>; navigation: any}): BottomTabNavigationOptions => {
    return {
      tabBarLabel: (props: any) => {
        const focused = props.focused
        let name = names[route.name]
        return (
          <Text style={focused ? styles.labelFocus : styles.label}>
            {name}
          </Text>
        )
      },
      tabBarIcon: (props: any) => {
        const focused = props.focused
        return (
          <View>
            {focused ?
              <Image source={images[`${route.name}-fill`]} style={styles.icon}></Image> :
              <Image source={images[route.name]} style={styles.icon}></Image>
            }
          </View>
        )
      },
      tabBarButton: (props: any) => {
        const handlePress = (e: GestureResponderEvent) => {
          props.onPress && props.onPress(e)
        }
        return <TouchableOpacity {...props} onPress={handlePress}/>
      },
      tabBarStyle: {
        backgroundColor: '#fff', // 设置底部选项卡的背景色
      },
      headerShown: false,
    }
  }

  return (
    <Tab.Navigator
      screenOptions={args => screenOptions(args)}
      backBehavior="initialRoute"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
    </Tab.Navigator>
  )
}

export default TabScreen

