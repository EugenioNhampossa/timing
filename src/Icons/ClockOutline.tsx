import { styled } from 'nativewind'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Icon = ({ ...rest }) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
      {...rest}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  )
}

export const ClockOutlineIcon = styled(Icon)
