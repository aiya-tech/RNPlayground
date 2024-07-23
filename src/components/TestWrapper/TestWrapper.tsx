/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import {NavigationContainer} from '@react-navigation/native'
import {PropsWithChildren} from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {screen} from '~/theme'

const inset = {
  frame: {x: 0, y: 0, width: screen.width, height: screen.height},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
}

const TestWrapper: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaProvider initialMetrics={inset}>
      <NavigationContainer>{children}</NavigationContainer>
    </SafeAreaProvider>
  )
}

export default TestWrapper
