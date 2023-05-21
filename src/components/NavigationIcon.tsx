import React from 'react'
import { ClockIcon } from '../Icons/Clock'
import {
  ClockOutlineIcon,
  PieChartIcon,
  PieChartOutlineIcon,
  PlusIcon,
} from '../Icons'
import { View } from 'react-native'

type navIconProps = {
  route: string
  isFocused: boolean
}

export const NavigationIcon = ({ route, isFocused }: navIconProps) => {
  switch (route) {
    case 'HomeScreen':
      if (isFocused) return <ClockIcon className="text-slate-800" />
      else return <ClockOutlineIcon className="text-slate-800" />
    case 'OpenAddActivity':
      return (
        <View className="-translate-y-6 h-12">
          <PlusIcon className=" text-slate-500 " />
        </View>
      )

    case 'Analytics':
      if (isFocused) return <PieChartIcon className="text-slate-800" />
      else return <PieChartOutlineIcon className="text-slate-800" />

    default:
      break
  }
}
