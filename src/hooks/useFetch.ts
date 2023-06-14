import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'

export const useFetch = (key: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const value = await AsyncStorage.getItem(key)
      const jSonValue = value != null ? JSON.parse(value) : null
      setData(jSonValue)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}
