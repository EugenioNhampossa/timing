import { styled } from 'nativewind'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Icon = ({ ...rest }) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-7 w-7 text-black"
      {...rest}
    >
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
      />
    </Svg>
  )
}

export const ListOutlineIcon = styled(Icon)
