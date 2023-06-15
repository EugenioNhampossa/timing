import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TaskForm, Home, TagList } from './src/screens'
import { StatusBar } from 'expo-status-bar'
import {
  Rubik_700Bold,
  Rubik_400Regular,
  Rubik_600SemiBold,
  Rubik_500Medium,
} from '@expo-google-fonts/rubik'
import { useFonts } from 'expo-font'
import colors from 'tailwindcss/colors'
import { TabBar } from './src/components/Layout/TabBar'
import { Analytics } from './src/screens/Analytics'
import { Provider } from 'react-redux'
import store from './src/store'
import { TimerModal } from './src/screens/Modals/TimerModal'
import { Historic } from './src/screens/Historic'
import { TaskList } from './src/screens/TaskList'
import { Header } from './src/components/Layout/Header'
const HomeStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Group>
      <HomeStack.Screen
        name="TagList"
        component={TagList}
        options={{
          header: () => <Header title="Tag List" />,
        }}
      />
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
        <StatusBar translucent style="inverted" />
        <TaskForm />
        <TimerModal />
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
          <Tab.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeStackScreen}
          />
          <Tab.Screen
            name="TaskLIst"
            component={TaskList}
            options={{
              header: () => <Header title="Task" />,
            }}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="OpenAddTask"
            component={HomeStackScreen}
          />
          <Tab.Screen
            name="Historic"
            component={Historic}
            options={{
              header: () => <Header title="History" />,
            }}
          />
          <Tab.Screen
            name="Analytics"
            component={Analytics}
            options={{
              header: () => <Header title="Analytics" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
