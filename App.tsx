import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, TagList } from './src/screens'
import { StatusBar } from 'expo-status-bar'
import {
  Rubik_700Bold,
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_500Medium,
} from '@expo-google-fonts/rubik'
import { useFonts } from 'expo-font'
import colors from 'tailwindcss/colors'

const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="TagList" component={TagList} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  })

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.slate[100],
    },
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar translucent style="auto" />
      <Tab.Navigator>
        <Tab.Screen
          options={{ headerShown: false, title: '' }}
          name="HomeScreen"
          component={HomeStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
