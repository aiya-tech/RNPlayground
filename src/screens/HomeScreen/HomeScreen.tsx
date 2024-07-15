import React, {useEffect} from 'react'
import {ActivityIndicator, FlatList, Image, RefreshControl, Text, View} from 'react-native'
import {styles} from './HomeScreenStyles'
import useDogData from '~/hooks/useDogData'
import {Dog} from '~/models/dogs'
import {mockDogs} from '~/hooks/mock'
import {screen} from '~/theme'
import TabHeader from '~/components/TabHeader'

let array: Dog[] = []

const HomeScreen: React.FC = () => {

  const {dogs, loading, error, fetchDogData, refreshing, refreshDogData} = useDogData()

  useEffect(() => {
    fetchDogData()
  }, [])

  return (
    <View style={styles.container}>
      <TabHeader title='首页'></TabHeader>
    </View>
  )
}

export default HomeScreen
