import React from 'react'
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container } from '../components/Container'
import { TimerCard } from '../components/TimerCard'
import { MoreIcon } from '../Icons'

export const Home = () => {
  return (
    <>
      <SafeAreaView>
        <Container className="pt-7">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold">Task</Text>
            <TouchableOpacity>
              <MoreIcon className="text-gray-500" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <TimerCard />
          </TouchableOpacity>
        </Container>
      </SafeAreaView>
    </>
  )
}
