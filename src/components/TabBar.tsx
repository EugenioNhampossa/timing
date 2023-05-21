import React from 'react'

import { View, Pressable, TouchableOpacity, Alert } from 'react-native'
import { NavigationIcon } from './NavigationIcon'

export const TabBar = ({ state, descriptors, navigation }: any) => {
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
          if (label !== 'OpenAddActivity') {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          } else {
            alert('Tem que abrir modal')
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
