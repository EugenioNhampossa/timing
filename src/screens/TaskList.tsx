import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { TaskCard, Container } from '../components'
import { FunnelIcon, MagnifyingGlassIcon } from '../Icons'
import colors from 'tailwindcss/colors'
import { TAGS } from '../utils/tags'

export const TaskList = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container className="pb-20 pt-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-auto flex-row items-center rounded-lg bg-white px-2 focus:border-2 focus:border-gray-400">
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
            {TAGS.map((item, key) => (
              <TaskCard key={'#Act' + item.id} />
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}
