import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Alert } from 'react-native'

export const useMutate = (key: string) => {
  const [isLoading, setIsLoading] = useState(false)

  const mutate = async (data) => {
    setIsLoading(true)
    try {
      const previousData = await AsyncStorage.getItem(key)
      const jSonValue: any[] =
        previousData != null ? JSON.parse(previousData) : null
      if (jSonValue == null) {
        await AsyncStorage.setItem(key, '[' + JSON.stringify(data) + ']')
      } else {
        jSonValue.push(data)
        await AsyncStorage.setItem(key, JSON.stringify(jSonValue))
      }
      return true
    } catch (error) {
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return { mutate, isLoading }
}
