import React, { ReactElement } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CodeBracketIcon } from '../Icons'
import { JsxElement } from 'typescript'

type tagCardProps = {
  title: string
  icon: ReactElement
  color: string
}

export const TagCard = ({ title, icon, color }: tagCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View className="mr-4 items-center rounded-lg bg-white px-7 py-4">
        <View className={`mb-2 rounded-full ${color}`}>{icon}</View>
        <Text className="text-sm font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
