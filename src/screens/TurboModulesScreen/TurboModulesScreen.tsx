import React from 'react'
import {View} from 'react-native'
import {styles} from './TurboModulesScreenStyles'
import Header from '~/components/Header'

const TurboModulesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title='🚀 TurboModules 使用'></Header>
    </View>
  )
}

export default TurboModulesScreen

