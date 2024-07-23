import React from 'react'
import {render, waitFor} from '@testing-library/react-native'
import HomeScreen from '~/screens/HomeScreen' // 根据实际路径调整
import {mockDogs} from '~/hooks/mock' // 根据实际路径调整
import useDogData from '~/hooks/useDogData' // 根据实际路径调整
import TestWrapper from '~/components/TestWrapper'

// Mock useDogData hook
jest.mock('~/hooks/useDogData', () => ({
  __esModule: true,
  default: jest.fn(),
}))

// Mock data for testing
const mockDogData = {
  dogs: mockDogs,
  loading: false,
  error: null,
  fetchDogData: jest.fn(),
  refreshing: false,
  refreshDogData: jest.fn(),
}

describe('HomeScreen', () => {
  beforeEach(() => {
    // Reset mock implementation before each test
    (useDogData as jest.Mock).mockReturnValue(mockDogData)
  })

  it('renders correctly and displays dog cards', async () => {
    const {getByText, getAllByTestId, debug} = render(
      <TestWrapper>
        <HomeScreen />
      </TestWrapper>,
    )

    expect(getByText('首页')).toBeTruthy()
  })
})
