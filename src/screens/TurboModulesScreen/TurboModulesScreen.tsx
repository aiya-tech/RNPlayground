import React, {useState} from 'react'
import {Button, Text, View} from 'react-native'
import {styles} from './TurboModulesScreenStyles'
import Header from '~/components/Header'
import RTNCalculator from 'rtn-calculator/js/NativeCalculator.ts'

const TurboModulesScreen: React.FC = () => {

  const [result, setResult] = useState<number>()

  const handleAdd = async () => {
    const value = await RTNCalculator?.add(3, 7)
    setResult(value)
  }

  return (
    <View style={styles.container}>
      <Header title='🚀 TurboModules 使用'></Header>
      <Text style={{marginLeft: 20, marginTop: 20}}>
        3+7={result ?? '??'}
      </Text>
      <Button
        title="Compute"
        onPress={handleAdd}
      />
    </View>
  )
}

export default TurboModulesScreen

