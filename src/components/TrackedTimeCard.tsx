import { styled } from 'nativewind'
import React from 'react'
import { View, Text } from 'react-native'
import { BookIcon } from '../Icons'
import { colorView } from '../utils'

const StyledTrackedTimeCard = ({ ...rest }) => {
  return (
    <>
      <View className="mb-4 flex-row rounded-lg bg-white px-7 py-4" {...rest}>
        <View className="h-full flex-row items-center">
          <View className={`mr-5 rounded-full bg-green-500 p-4`}>
            <BookIcon />
          </View>
        </View>
        <View className="flex-auto">
          <Text style={{}} className="text-lg font-medium">
            Terminar Projecto
          </Text>
          <View className="mt-2 flex-row items-center justify-between">
            <Text className="">00:30:32</Text>
            <Text className="opacity-50">{new Date().toDateString()}</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export const TrackedTimeCard = styled(StyledTrackedTimeCard)
