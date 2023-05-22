import { styled } from 'nativewind'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Icon = ({ ...rest }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-7 w-7"
      {...rest}
    >
      <Path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
        clipRule="evenodd"
      />
    </Svg>
  )
}

export const ClockIcon = styled(Icon)
