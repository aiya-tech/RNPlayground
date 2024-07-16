import React from 'react'
import {View} from 'react-native'
import {styles} from './HooksScreenStyles'
import Header from '~/components/Header'

const HooksScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title='🔧 常用 Hook 使用'></Header>
    </View>
  )
}

export default HooksScreen

