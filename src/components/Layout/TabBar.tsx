import React from 'react'

import { View, TouchableOpacity } from 'react-native'
import { NavigationIcon } from './NavigationIcon'
import { useAppDispatch } from '../../hooks'
import { modal_actions } from '../../store/modal.slice'

export const TabBar = ({ state, descriptors, navigation }: any) => {
  const dispatch = useAppDispatch()
  return (
    <View className="absolute bottom-0 h-20 w-full flex-row justify-between  rounded-t-[20px] bg-white p-4 shadow-2xl shadow-black">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          if (label !== 'OpenAddTask') {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          } else {
            dispatch(modal_actions.toggleTaskForm())
          }
        }

        return (
          <View key={index} className="p-3">
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
              <View className="flex-1">
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}
