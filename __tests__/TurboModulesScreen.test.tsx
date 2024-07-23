
import {it} from '@jest/globals'
import React from 'react'
import TurboModulesScreen from '~/screens/TurboModulesScreen'
import {render, fireEvent, waitFor} from '@testing-library/react-native'
import TestWrapper from '~/components/TestWrapper'

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
