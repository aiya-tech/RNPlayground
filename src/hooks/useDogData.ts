import {useState, useEffect} from 'react'
import {Dog} from '~/models/dogs'
import {getImages} from '~/services/api/image'
import {mockDogs} from './mock'

const useDogData = () => {
  const [dogs, setDogs] = useState<Dog[]>([]) // 狗狗数据数组
  const [loading, setLoading] = useState<boolean>(true) // 加载状态
  const [error, setError] = useState<string | null>(null) // 错误信息
  const [page, setPage] = useState<number>(1) // 页码
  const [refreshing, setRefreshing] = useState<boolean>(false) // 下拉刷新状态

  const fetchDogData = async (reset: boolean = false) => {
    return getImages(page)
      .then(res => {
        const data = res.data
        // setDogs(prevDogs => (reset ? data : [...prevDogs, ...data]))
        setDogs(mockDogs as Dog[])
        setLoading(false)
        if (reset) {
          setRefreshing(false)
          setPage(1)
        } else {
          setPage(prevPage => prevPage + 1)
        }
        return data
      })
      .catch(e => {
        setError(e.message)
        setLoading(false)
        if (reset) setRefreshing(false)
      })
  }

  // useEffect(() => {
  //   fetchDogData()
  // }, [])

  const refreshDogData = () => {
    setRefreshing(true)
    fetchDogData(true)
  }

  return {dogs, loading, error, fetchDogData, refreshing, refreshDogData}
}

export default useDogData
