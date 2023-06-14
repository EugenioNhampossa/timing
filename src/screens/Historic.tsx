import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Container, TrackedTimeCard } from '../components'
import { FunnelIcon, MagnifyingGlassIcon } from '../Icons'
import colors from 'tailwindcss/colors'
import { TrackerProps } from '../@types'

export const Historic = () => {
  const [trakers, setTrackers] = useState<TrackerProps[]>([])

  return (
    <SafeAreaView>
      <ScrollView>
        <Container className="pb-20 pt-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-auto flex-row items-center rounded-lg border-2 border-transparent bg-white px-2 focus:border-gray-400">
              <MagnifyingGlassIcon />
              <TextInput
                cursorColor={colors.gray[500]}
                className="flex-auto px-3 py-1"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              className="ml-1 rounded-lg px-3 py-1"
            >
              <FunnelIcon className="" />
            </TouchableOpacity>
          </View>
          <View className="mt-5">
            {trakers.map((item, key) => (
              <TrackedTimeCard key={'#Act' + item.id + key} />
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}
