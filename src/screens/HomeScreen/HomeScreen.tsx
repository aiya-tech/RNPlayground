import React, {useEffect, useRef} from 'react'
import {LayoutAnimation, View} from 'react-native'
import {styles} from './HomeScreenStyles'
import useDogData from '~/hooks/useDogData'
import {mockDogs} from '~/hooks/mock'
import TabHeader from '~/components/TabHeader'
import {MasonryFlashList} from '@shopify/flash-list'
import DogCard from '~/components/DogCard'

const HomeScreen: React.FC = () => {

  const {
    dogs,
    loading,
    error,
    fetchDogData,
    refreshing,
    refreshDogData,
  } = useDogData()
  const listRef = useRef<any>()

  useEffect(() => {
    fetchDogData()
  }, [])

  return (
    <View style={styles.container}>
      <TabHeader title='首页'></TabHeader>
      <MasonryFlashList
        ref={listRef}
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
