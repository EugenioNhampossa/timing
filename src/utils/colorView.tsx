import React, { ReactElement } from 'react'
import { View } from 'react-native'

export const colorView = (color: string, icon: ReactElement) => {
  switch (color) {
    case 'red':
      return <View className={`mb-2 rounded-full bg-red-500 p-4`}>{icon}</View>
    case 'orange':
      return (
        <View className={`mb-2 rounded-full bg-orange-500 p-4`}>{icon}</View>
      )
    case 'rose':
      return <View className={`mb-2 rounded-full bg-rose-500 p-4`}>{icon}</View>
    case 'purple':
      return (
        <View className={`mb-2 rounded-full bg-purple-500 p-4`}>{icon}</View>
      )
    case 'blue':
      return <View className={`mb-2 rounded-full bg-blue-500 p-4`}>{icon}</View>
    case 'green':
      return (
        <View className={`mb-2 rounded-full bg-green-500 p-4`}>{icon}</View>
      )
    default:
      return <View className={`mb-2 rounded-full bg-sky-500 p-4`}>{icon}</View>
  }
}
