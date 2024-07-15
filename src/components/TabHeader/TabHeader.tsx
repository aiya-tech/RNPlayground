import React from 'react'
import {Text, View} from 'react-native'
import {styles} from './TabHeaderStyles'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

type TabHeaderProps = {
  title?: string
}

const TabHeader: React.FC<TabHeaderProps> = ({title}) => {

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default TabHeader

