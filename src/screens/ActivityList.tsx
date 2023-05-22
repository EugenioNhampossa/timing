import React from 'react'
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { ActivityCard, Container } from '../components'
import { FunnelIcon, MagnifyingGlassIcon } from '../Icons'
import { tags } from './Home'
import colors from 'tailwindcss/colors'

export const ActivityList = () => {
  return (
    <SafeAreaView>
      <Container className="pb-20 pt-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-auto flex-row items-center rounded-lg bg-white px-2 focus:border-2 focus:border-gray-400">
            <MagnifyingGlassIcon />
            <TextInput cursorColor={colors.gray[500]} className="flex-auto px-3 py-1" />
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            className="ml-1 rounded-lg px-3 py-1"
          >
            <FunnelIcon className="" />
          </TouchableOpacity>
        </View>
        <FlatList
          className="mb-3 mt-5"
          data={tags}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ActivityCard key={'#Acti' + item.id} />}
        />
      </Container>
    </SafeAreaView>
  )
}
