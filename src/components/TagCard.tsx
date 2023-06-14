import React, { ReactElement } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

type tagCardProps = {
  title: string
  icon: ReactElement
  color: string
}

export const TagCard = ({ title, icon, color }: tagCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mr-4 items-center rounded-lg bg-white px-7 py-4 shadow-md"
    >
      <View className={`mb-2 rounded-full p-4 bg-${color}-500`}>{icon}</View>
      <Text className="text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}
