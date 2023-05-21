import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container } from './Container'
import { ChevronRightIcon } from '../Icons'
import ring from '../assets/ring.png'

export const TimerCard = () => {
  return (
    <>
      <Container className="rounded-xl bg-black px-4 py-6 ">
        <View className="mb-3 flex-row items-center justify-between">
          <Text className="text-3xl font-bold text-white">00:32:10</Text>
          <ChevronRightIcon className="text-white" />
        </View>
        <View className="flex-row items-center gap-3">
          <Image resizeMode="contain" className="w-3" source={ring} />
          <Text className="text-lg text-white">{'Rasion Project'}</Text>
        </View>
      </Container>
    </>
  )
}
