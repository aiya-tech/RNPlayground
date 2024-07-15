/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithChildren, useEffect} from 'react'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import {SafeAreaView} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import TabScreen from './screens/TabScreen'
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack'
import {theme} from './theme'

export type RootStackParamList = {
  Tab: {}
  Home: {}
  Me: {}
}

const Stack = createStackNavigator<RootStackParamList>()

const commonOptions: {options: StackNavigationOptions} = {
  options: {
    header: () => null,
  },
}

function App(): React.JSX.Element {

  return (
    <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: theme.primary}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Tab'}>
          <Stack.Screen name='Tab' component={TabScreen} options={{header: () => null}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
