import React, {useCallback, useEffect, useState} from 'react'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import {NavigationContainer, NavigationState} from '@react-navigation/native'
import TabScreen from './screens/TabScreen'
import {CardStyleInterpolators, createStackNavigator, StackNavigationOptions} from '@react-navigation/stack'
import {theme} from './theme'
import {NativeModules, Platform, StatusBar} from 'react-native'
import TurboModulesScreen from './screens/TurboModulesScreen'
import HooksScreen from './screens/HooksScreen'

export type RootStackParamList = {
  Tab: {}
  Home: {}
  Me: {}
  Function: {}
  TurboModules: {}
  Hooks: {}
}

const Stack = createStackNavigator<RootStackParamList>()

const commonOptions: {options: StackNavigationOptions} = {
  options: {
    header: () => null,
  },
}

export const LightContentRouteName = ['Home', 'Function', 'Me']

function App(): React.JSX.Element {

  const [currentRouteName, setCurrentRouteName] = useState('Home')

  // useEffect(() => {
  //   NativeModules.DevSettings.setIsDebuggingRemotely(false)
  // }, [])

  const handleNavigationChange = useCallback((state?: NavigationState) => {
    if (!state) return
    const {index, routes} = state
    if (routes[index].state) {
      handleNavigationChange(routes[index].state as any)
      return
    }
    const currentRoute = routes[index]
    if (currentRoute) {
      setCurrentRouteName(currentRoute.name)
    }
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={[]} style={{flex: 1, backgroundColor: theme.primary}}>
        <StatusBar
          barStyle={LightContentRouteName.includes(currentRouteName) ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <NavigationContainer onStateChange={handleNavigationChange}>
          <Stack.Navigator
            initialRouteName={'Tab'}
            screenOptions={{
              cardStyleInterpolator: Platform.OS === 'android' ? CardStyleInterpolators.forHorizontalIOS : undefined,
            }}
          >
            <Stack.Screen name='Tab' component={TabScreen} options={{header: () => null}} />
            <Stack.Screen name='TurboModules' component={TurboModulesScreen} {...commonOptions}/>
            <Stack.Screen name='Hooks' component={HooksScreen} {...commonOptions}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}

export default App
