import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './HeaderStyles'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {NavigationProp, useNavigation} from '@react-navigation/native'

type HeaderProps = {
  title?: string
}

const Header: React.FC<HeaderProps> = ({title}) => {

  const navigation = useNavigation<NavigationProp<any>>()
  const insets = useSafeAreaInsets()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top, height: styles.container.height + insets.top}]}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image source={require('~/assets/images/common/back.png')}></Image>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View></View>
    </View>
  )
}

export default Header

