import React, {useEffect} from 'react'
import {ActivityIndicator, FlatList, Image, RefreshControl, Text, View} from 'react-native'
import {styles} from './HomeScreenStyles'
import useDogData from '~/hooks/useDogData'
import {Dog} from '~/models/dogs'

let array: Dog[] = []

const HomeScreen: React.FC = () => {

  const {dogs, loading, error, fetchDogData, refreshing, refreshDogData} = useDogData()

  useEffect(() => {
    fetchDogData()
  }, [])

  // useEffect(() => {
  //   // console.log('dogs:', JSON.stringify(dogs))
  //   array = [...array, ...dogs]
  //   console.log(JSON.stringify(array))
  // }, [dogs])

  const renderItem = ({item, index}: {item: Dog; index: number}) => {
    let breed
    if (item.breeds.length) {
      breed = item.breeds[0]
    }
    return (
      <View style={styles.itemContainer}>
        <Image source={{uri: item.url}} style={styles.image} />
        {item.breeds ?
          <View style={styles.textContainer}>
            <Text style={styles.title}>{breed?.name}</Text>
            <Text style={styles.description}>{breed?.temperament}</Text>
          </View>
          : null
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{flex: 1, width: '100%'}}
        data={dogs}
        keyExtractor={(item) => item.id} // 提取唯一键
        renderItem={renderItem} // 渲染列表项
        // onEndReached={() => fetchDogData()} // 触底加载更多
        // onEndReachedThreshold={0.5} // 触发加载更多的阈值
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshDogData} // 下拉刷新
          />
        }
        // ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null} // 底部加载指示器
      />
    </View>
  )
}

export default HomeScreen
