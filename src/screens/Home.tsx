import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Container } from '../components/Container'
import { TimerCard } from '../components/TimerCard'
import {
  BookIcon,
  BriefCaseIcon,
  CodeBracketIcon,
  MonitorIcon,
  MoreIcon,
} from '../Icons'
import { TagCard } from '../components/TagCard'
import { ClockIcon } from '../Icons/Clock'

const tags = [
  {
    id: 1,
    title: 'Coding',
    icon: <CodeBracketIcon />,
    color: 'bg-red-500 p-4',
  },
  {
    id: 2,
    title: 'Reading',
    icon: <BookIcon />,
    color: 'bg-green p-4',
  },
  {
    id: 3,
    title: 'Design',
    icon: <MonitorIcon />,
    color: 'bg-purple p-4',
  },
  {
    id: 4,
    title: 'Working',
    icon: <BriefCaseIcon />,
    color: 'bg-orange p-4',
  },
  {
    id: 5,
    title: 'Other',
    icon: <ClockIcon />,
    color: 'bg-rose-500 p-4',
  },
]

export const Home = () => {
  return (
    <>
      <SafeAreaView>
        <Container className="pt-7">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-bold">Task</Text>
            <TouchableOpacity activeOpacity={0.6}>
              <MoreIcon className="text-gray-500" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.8} className="mb-5">
            <TimerCard />
          </TouchableOpacity>
          <View>
            <View className="mb-3 flex-row items-center justify-between">
              <Text className="text-xl font-bold">Tags</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text className="font-semibold">See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              data={tags}
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
          </View>
        </Container>
      </SafeAreaView>
    </>
  )
}
