import React from 'react'
import {View} from 'react-native'
import {styles} from './MeScreenStyles'
import TabHeader from '~/components/TabHeader'

const MeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TabHeader title='我的'></TabHeader>
    </View>
  )
}

export default MeScreen
