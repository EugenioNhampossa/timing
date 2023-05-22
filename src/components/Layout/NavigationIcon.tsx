import React from 'react'
import { ClockIcon } from '../../Icons/Clock'
import {
  ClockOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
  ListIcon,
  PieChartIcon,
  PieChartOutlineIcon,
  PlusIcon,
} from '../../Icons'
import { View } from 'react-native'
import { ListOutlineIcon } from '../../Icons/ListOutline'

type navIconProps = {
  route: string
  isFocused: boolean
}

export const NavigationIcon = ({ route, isFocused }: navIconProps) => {
  switch (route) {
    case 'HomeScreen':
      if (isFocused) return <HomeIcon className="text-slate-800" />
      else return <HomeOutlineIcon className="text-slate-800" />
    case 'OpenAddActivity':
      return (
        <View className="h-12 -translate-y-6">
          <PlusIcon className=" text-purple-600 " />
        </View>
      )
    case 'Analytics':
      if (isFocused) return <PieChartIcon className="text-slate-800" />
      else return <PieChartOutlineIcon className="text-slate-800" />

    case 'Historic':
      if (isFocused) return <ClockIcon className="text-slate-800" />
      else return <ClockOutlineIcon className="text-slate-800" />

    case 'ActivityLIst':
      if (isFocused) return <ListIcon className="text-slate-800" />
      else return <ListOutlineIcon className="text-slate-800" />

    default:
      break
  }
}
