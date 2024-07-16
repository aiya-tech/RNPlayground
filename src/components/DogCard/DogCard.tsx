import React from 'react'
import {Image, Text, View} from 'react-native'
import {styles} from './DogCardStyles'
import {Dog} from '~/models/dogs'
import FastImage from 'react-native-fast-image'

type DogCardProps = {
  item: Dog
}

const DogCard: React.FC<DogCardProps> = ({item}) => {
  const breed = item.breeds[0]
  const imageUrl = item.url

  return (
    <View style={styles.card}>
      <FastImage source={{uri: imageUrl}} style={styles.image} />
      {breed && (
        <View style={styles.info}>
          <Text style={styles.name}>{breed.name}</Text>
          <Text style={styles.bredFor} numberOfLines={2}>{breed.bred_for}</Text>
        </View>
      )}
    </View>
  )
}

export default DogCard

