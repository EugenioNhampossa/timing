import React from 'react'
import { View, Text } from 'react-native'

export const tagView = (color: string, title: string) => {
  switch (color) {
    case 'red':
      return (
        <View className="flex-row">
          <Text className="bg-opacity-9 rounded-lg bg-red-50 bg-opacity-25 px-2  py-1 text-red-600">
            {title}
          </Text>
        </View>
      )
    case 'orange':
      return (
        <View className="flex-row">
          <Text className="bg-opacity-9 rounded-lg bg-orange-50 bg-opacity-25 px-2  py-1 text-orange-600">
            {title}
          </Text>
        </View>
      )
    case 'rose':
      return (
        <View className="flex-row">
          <Text className="bg-opacity-9 rounded-lg bg-rose-50 bg-opacity-25 px-2  py-1 text-rose-600">
            {title}
          </Text>
        </View>
      )
    case 'purple':
      return (
        <View className="flex-row">
          <Text className="bg-opacity-9 rounded-lg bg-purple-50 bg-opacity-25 px-2  py-1 text-purple-600">
            {title}
          </Text>
        </View>
      )
    case 'blue':
      return (
        <View className="flex-row">
          <Text className="bg-opacity-9 rounded-lg bg-blue-50 bg-opacity-25 px-2  py-1 text-blue-600">
            {title}
          </Text>
        </View>
      )
    case 'green':
      return (
        <View className="flex-row">
          <Text className="bg-opacity-9 rounded-lg bg-green-50 bg-opacity-25 px-2  py-1 text-green-600">
            {title}
          </Text>
        </View>
      )
    default:
      return (
        <View className="flex-row">
          <Text className="bg-opacity-9 rounded-lg bg-slate-50 bg-opacity-25 px-2  py-1 text-slate-600">
            {title}
          </Text>
        </View>
      )
  }
}
