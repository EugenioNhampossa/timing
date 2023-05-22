import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Container } from './Layout/Container'
import { ChevronRightIcon } from '../Icons'
import ring from '../assets/ring.png'
import { useAppDispatch } from '../hooks'
import { modal_actions } from '../store/modal.slice'

export const TimerCard = () => {
  const dispatch = useAppDispatch()

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mb-5"
      onPress={() => dispatch(modal_actions.toggleTImerModal())}
    >
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
    </TouchableOpacity>
  )
}
