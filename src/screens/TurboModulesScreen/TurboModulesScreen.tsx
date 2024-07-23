import React, {useState} from 'react'
import {Button, Text, View} from 'react-native'
import {styles} from './TurboModulesScreenStyles'
import Header from '~/components/Header'
import NativeSampleModule from '../../../tm/NativeSampleModule'

const TurboModulesScreen: React.FC = () => {

  const [result, setResult] = useState<string>()

  const handleAdd = async () => {
    const value = await NativeSampleModule?.reverseString('the quick brown fox jumps over the lazy dog')
    setResult(value)
  }

  return (
    <View style={styles.container}>
      <Header title='🚀 TurboModules 使用'></Header>
      <Text style={{marginLeft: 20, marginTop: 20}} testID='1'>
        {result ?? ''}
      </Text>
      <Button
        testID='2'
        title="Reverse String"
        onPress={handleAdd}
      />
    </View>
  )
}

export default TurboModulesScreen

