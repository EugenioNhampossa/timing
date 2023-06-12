import React from 'react'
import { SafeAreaView, ScrollView, TextInput, View } from 'react-native'
import { Container } from '../components'
import { MagnifyingGlassIcon } from '../Icons'
import colors from 'tailwindcss/colors'
import { tags } from './Home'
import { TagCard } from '../components/TagCard'

export const TagList = () => {
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
          </View>
          <View className="mt-5 flex-row flex-wrap justify-center">
            {tags.map((item, key) => (
              <View className="mt-5">
                <TagCard
                  key={'#' + item.id}
                  icon={item.icon}
                  title={item.title}
                  color={item.color}
                />
              </View>
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}
