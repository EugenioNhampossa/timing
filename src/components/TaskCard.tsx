import { styled } from 'nativewind'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { BookIcon, PlayIcon } from '../Icons'

const StyledTaskCard = ({ ...rest }) => {
  return (
    <>
      <View
        className="mb-4 flex-row items-end justify-between rounded-lg bg-white px-7 py-4"
        {...rest}
      >
        <View>
          <View className="flex-row items-center gap-4 rounded-lg bg-transparent">
            <View className={`mb-2 rounded-full bg-green-500 p-4`}>
              <BookIcon />
            </View>
            <View>
              <Text className="mb-1 text-lg font-medium">Fifty Shades</Text>
              <View className="flex-row">
                <Text className="bg-opacity-9 rounded-lg bg-green-50 bg-opacity-25 px-2  py-1 text-green-600">
                  Reading
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
