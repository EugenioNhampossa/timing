import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container } from '../components/Layout/Container'
import { TimerCard } from '../components/TimerCard'
import { TagCard } from '../components/TagCard'
import { TaskCard } from '../components'
import { MoreIcon } from '../Icons'
import { TAGS } from '../utils/tags'


export const Home = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Container className="pb-20 pt-7">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-xl font-bold">Current task</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <MoreIcon className="text-gray-500" />
              </TouchableOpacity>
            </View>
            <TimerCard />
            <View>
              <View className="mb-3 flex-row items-center justify-between">
                <Text className="text-xl font-bold">Tags</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => navigation.navigate('TagList')}
                >
                  <Text className="font-semibold">See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                className="mb-3"
                horizontal
                data={TAGS}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TagCard
                    key={'#' + item.id}
                    icon={item.icon}
                    title={item.title}
                    color={item.color}
                  />
                )}
              />
              <View>
                <View className="mb-3 flex-row items-center justify-between">
                  <Text className="text-xl font-bold">Tasks</Text>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('TaskLIst')}
                  >
                    <Text className="font-semibold">See all</Text>
                  </TouchableOpacity>
                </View>
                {[].map((item, key) => (
                  <TaskCard key={'#Act' + item.id} />
                ))}
              </View>
            </View>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
