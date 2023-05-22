import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ActivityForm, Home, TagList } from './src/screens'
import { StatusBar } from 'expo-status-bar'
import {
  Rubik_700Bold,
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_500Medium,
} from '@expo-google-fonts/rubik'
import { useFonts } from 'expo-font'
import colors from 'tailwindcss/colors'
import { TabBar } from './src/components/TabBar'
import { Analytics } from './src/screens/Analytics'
import { Provider } from 'react-redux'
import store from './src/store'
import { TimerModal } from './src/screens/Modals/TimerModal'
import { Historic } from './src/screens/Historic'
import { ActivityList } from './src/screens/ActivityList'

const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Group>
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
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <StatusBar translucent style="auto" />
        <ActivityForm />
        <TimerModal />
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
          <Tab.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeStackScreen}
          />
          <Tab.Screen name="ActivityLIst" component={ActivityList} />
          <Tab.Screen
            options={{ headerShown: false }}
            name="OpenAddActivity"
            component={HomeStackScreen}
          />
          <Tab.Screen name="Historic" component={Historic} />
          <Tab.Screen name="Analytics" component={Analytics} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
