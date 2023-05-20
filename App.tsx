import { StatusBar } from 'expo-status-bar'
import { Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100">
      <TouchableOpacity className="p-6 bg-purple-600 rounded-lg">
        <Text className="text-white font-bold">Hello Timing App</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}
