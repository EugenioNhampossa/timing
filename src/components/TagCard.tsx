import React, { ReactElement } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { colorView } from '../utils'

type tagCardProps = {
  title: string
  icon: ReactElement
  color: string
}

export const TagCard = ({ title, icon, color }: tagCardProps) => {
  const view = colorView(color, icon)
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mr-4 items-center rounded-lg bg-white px-7 py-4 shadow-md"
    >
      {view}
      <Text className="text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}
