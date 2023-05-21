import React from 'react'
import { useState } from 'react'
import {
  Image,
  Modal,
  View,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

export const ActivityForm = () => {
  const windowHeight = Dimensions.get('window').height
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true)
  }

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isBottomSheetOpen}
      onRequestClose={handleCloseBottomSheet}
    >
      <View
        className="absolute bottom-0 w-full items-center rounded-t-[30px] bg-white py-3"
        style={{ height: windowHeight * 0.94 }}
      >
        <View className="p-0.5 rounded-lg bg-slate-300 w-20" />
      </View>
    </Modal>
  )
}
