import React, {useEffect} from 'react'
import {View} from 'react-native'
import {styles} from './HomeScreenStyles'
import useDogData from '~/hooks/useDogData'
import {mockDogs} from '~/hooks/mock'
import TabHeader from '~/components/TabHeader'
import {MasonryFlashList} from '@shopify/flash-list'
import DogCard from '~/components/DogCard'

const HomeScreen: React.FC = () => {

  const {dogs, loading, error, fetchDogData, refreshing, refreshDogData} = useDogData()

  useEffect(() => {
    fetchDogData()
  }, [])

  return (
    <View style={styles.container}>
      <TabHeader title='首页'></TabHeader>
      <MasonryFlashList
        data={mockDogs}
        renderItem={({item}) => <DogCard item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        estimatedItemSize={300}
      />
    </View>
  )
}

export default HomeScreen
