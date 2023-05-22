import React, { ReactElement } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from '../../Icons'
import { useNavigation } from '@react-navigation/native'

export type headerProps = {
  title: string
  rightElement?: ReactElement
}

export const Header = ({ title, rightElement }: headerProps) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View className="flex-row items-center  justify-between bg-white px-3 py-4 border-b-[0.5px] border-b-gray-300">
        <TouchableOpacity
          activeOpacity={0.4}
          className="rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text className="text-xl font-semibold">{title}</Text>
        <View>{rightElement}</View>
      </View>
    </SafeAreaView>
  )
}
