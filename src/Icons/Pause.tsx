import { styled } from 'nativewind'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Icon = ({ ...rest }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-gray-500"
      {...rest}
    >
      <Path
        fillRule="evenodd"
        d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export const PauseIcon = styled(Icon)
