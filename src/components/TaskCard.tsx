import { styled } from 'nativewind'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PlayIcon } from '../Icons'
import { TAGS, colorView } from '../utils'

const StyledTaskCard = ({ item }) => {
  const tag = TAGS.find((tag) => tag.id === item.tag)
  const view = colorView(tag.color, tag.icon)
  return (
    <>
      <View className="mb-4 flex-row items-end justify-between rounded-lg bg-white px-7 py-4">
        <View>
          <View className="flex-row items-center gap-4 rounded-lg bg-transparent">
            {view}
            <View>
              <Text className="mb-1 text-lg font-medium">{item.title}</Text>
              <View className="flex-row">
                <Text
                  className={`bg-opacity-9 bg-${tag.color}-50 text-${tag.color}-600 rounded-lg bg-opacity-25  px-2 py-1`}
                >
                  {tag.title}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <PlayIcon />
        </TouchableOpacity>
      </View>
    </>
  )
}

export const TaskCard = styled(StyledTaskCard)
