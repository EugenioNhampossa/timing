import { View } from 'react-native'
import { styled } from 'nativewind'

const StyledContainer = ({ ...rest }) => {
  return <View className="container px-3" {...rest} />
}

export const Container = styled(StyledContainer)
