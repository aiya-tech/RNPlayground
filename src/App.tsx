/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithChildren, useEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import TabScreen from './screens/TabScreen'
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack'
import {theme} from './theme'
import {NativeModules} from 'react-native'
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

function App(): React.JSX.Element {

  useEffect(() => {
    NativeModules.DevSettings.setIsDebuggingRemotely(false)
  }, [])

  return (
    <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: theme.primary}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Tab'}>
          <Stack.Screen name='Tab' component={TabScreen} options={{header: () => null}} />
          <Stack.Screen name='TurboModules' component={TurboModulesScreen} options={{header: () => null}} />
          <Stack.Screen name='Hooks' component={HooksScreen} options={{header: () => null}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
