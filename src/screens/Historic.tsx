import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { ActivityCard, Container, TrackedTimeCard } from '../components'
import { FunnelIcon, MagnifyingGlassIcon } from '../Icons'
import { tags } from './Home'
import colors from 'tailwindcss/colors'

export const Historic = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container className="pb-20 pt-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-auto flex-row items-center rounded-lg border-2 bg-white px-2 border-transparent focus:border-gray-400">
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
            {tags.map((item, key) => (
              <TrackedTimeCard key={'#Act' + item.id} />
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}
