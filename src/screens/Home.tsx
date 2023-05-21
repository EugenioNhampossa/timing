import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native'
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
import { ActivityCard } from '../components'

const tags = [
  {
    id: 1,
    title: 'Coding',
    icon: <CodeBracketIcon />,
    color: 'bg-red-500',
  },
  {
    id: 2,
    title: 'Reading',
    icon: <BookIcon />,
    color: 'bg-green-500',
  },
  {
    id: 3,
    title: 'Design',
    icon: <MonitorIcon />,
    color: 'bg-purple-500',
  },
  {
    id: 4,
    title: 'Working',
    icon: <BriefCaseIcon />,
    color: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'Other',
    icon: <ClockIcon />,
    color: 'bg-rose-500',
  },
]

export const Home = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <Container className="pt-7">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-xl font-bold">Task</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <MoreIcon className="text-gray-500" />
              </TouchableOpacity>
            </View>
            <TimerCard />
            <View>
              <View className="mb-3 flex-row items-center justify-between">
                <Text className="text-xl font-bold">Tags</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text className="font-semibold">See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                className="mb-3"
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
              <View>
                <View className="mb-3 flex-row items-center justify-between">
                  <Text className="text-xl font-bold">Activities</Text>
                  <TouchableOpacity activeOpacity={0.6}>
                    <Text className="font-semibold">See all</Text>
                  </TouchableOpacity>
                </View>
                {tags.map((item, key) => (
                  <ActivityCard key={'#Act' + item.id} />
                ))}
              </View>
            </View>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
