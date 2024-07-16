import React from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native'
import {styles} from './FunctionScreenStyles'
import TabHeader from '~/components/TabHeader'
import {NavigationProp, useNavigation} from '@react-navigation/native'

const DATA = [
  {id: '1', title: '🚀 TurboModules 使用', screen: 'TurboModules'},
  {id: '2', title: '🔧 常用 Hook 使用', screen: 'Hooks'},
]

const FunctionScreen: React.FC = () => {

  const navigation = useNavigation<NavigationProp<any>>()

  const handleScreen = (item: any) => {
    navigation.navigate(item.screen)
  }

  const renderItem = (it: any) => {
    const {item, index} = it
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleScreen(item)}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <TabHeader title='功能'></TabHeader>
      <FlatList
        data={DATA}
        renderItem={(item) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default FunctionScreen

