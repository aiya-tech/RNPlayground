
import {it} from '@jest/globals'
import {NavigationContainer} from '@react-navigation/native'
import React, {PropsWithChildren} from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import TurboModulesScreen from '~/screens/TurboModulesScreen'
import {render, fireEvent, waitFor} from '@testing-library/react-native'

const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
}

const TestWrapper: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaProvider initialMetrics={inset}>
      <NavigationContainer>{children}</NavigationContainer>
    </SafeAreaProvider>
  )
}

jest.mock('../tm/NativeSampleModule', () => ({
  reverseString: jest.fn().mockResolvedValue('god yzal eht revo spmuj xof nworb kciuq eht'),
}))

describe('TurboModulesScreen', () => {
  it('reverses the string on button press', async () => {

    const {getByTestId, debug} = render(
      <TestWrapper>
        <TurboModulesScreen />
      </TestWrapper>,
    )

    const button = getByTestId('2')
    fireEvent.press(button)

    await waitFor(() => {
      const reversedText = getByTestId('1')
      expect(reversedText.props.children).toBe('god yzal eht revo spmuj xof nworb kciuq eht')
    })
  })
})
