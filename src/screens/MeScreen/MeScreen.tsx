import React from 'react'
import {View} from 'react-native'
import {styles} from './MeScreenStyles'
import TabHeader from '~/components/TabHeader'
import {SafeAreaView} from 'react-native-safe-area-context'

const MeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <TabHeader title='我的'></TabHeader>
    </SafeAreaView>
  )
}

export default MeScreen
