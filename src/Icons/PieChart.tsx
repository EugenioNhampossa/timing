import { styled } from 'nativewind'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Icon = ({ ...rest }) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" {...rest}>
      <Path
        fill-rule="evenodd"
        d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
        clip-rule="evenodd"
      />
      <Path
        fill-rule="evenodd"
        d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
        clip-rule="evenodd"
      />
    </Svg>
  )
}

export const PieChartIcon = styled(Icon)
