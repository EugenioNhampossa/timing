import { styled } from 'nativewind'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Icon = ({ ...rest }) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-7 w-7 text-black"
      {...rest}
    >
      <Path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </Svg>
  )
}

export const MoreIcon = styled(Icon)
