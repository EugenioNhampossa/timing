import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { TaskCard, Container } from '../components'
import { FunnelIcon, MagnifyingGlassIcon } from '../Icons'
import colors from 'tailwindcss/colors'
import { useFetch } from '../hooks/useFetch'
import { KEYS } from '../utils'

export const TaskList = () => {
  const { data, error, isLoading, refetch } = useFetch(KEYS.tasks)

  useEffect(() => {
    if (error) {
      Alert.alert('Error', 'Unable to load data')
    }
  }, [data])

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
          {isLoading ? (
            <View className="h-full items-center justify-center">
              <ActivityIndicator color={colors.purple[500]} size="large" />
            </View>
          ) : (
            <View className="mt-5">
              {data.map((item, key) => (
                <TaskCard key={'#Act' + item.id} item={item} />
              ))}
            </View>
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}
