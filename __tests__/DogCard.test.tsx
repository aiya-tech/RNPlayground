import React from 'react'
import {render} from '@testing-library/react-native'
import DogCard from '~/components/DogCard'
import {Dog} from '~/models/dogs'

const mockDog: Dog = {
  breeds: [
    {
      weight: {
        imperial: '40 - 70',
        metric: '18 - 32',
      },
      height: {
        imperial: '17 - 20',
        metric: '43 - 51',
      },
      id: 81,
      name: 'Chow Chow',
      bred_for: 'Guardian, cart pulling, hunting',
      breed_group: 'Non-Sporting',
      life_span: '12 - 15 years',
      temperament: 'Aloof, Loyal, Independent, Quiet',
      reference_image_id: 'ry8KWgqEQ',
    },
  ],
  id: 'ry8KWgqEQ',
  url: 'https://cdn2.thedogapi.com/images/ry8KWgqEQ_1280.jpg',
  width: 1010,
  height: 673,
}

describe('DogCard', () => {
  it('renders correctly with given dog data', () => {
    const {getByText} = render(<DogCard item={mockDog} />)

    expect(getByText('Chow Chow')).toBeTruthy()
    expect(getByText('Guardian, cart pulling, hunting')).toBeTruthy()
  })
})
