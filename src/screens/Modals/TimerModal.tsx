import React from 'react'
import {
  Modal,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Container } from '../../components'
import { modal_actions } from '../../store/modal.slice'
import { CloseIcon, PauseIcon, StopIcon } from '../../Icons'
import ring from '../../assets/ring.png'

export const TimerModal = () => {
  const windowHeight = Dimensions.get('window').height
  const isTimerModalOpen = useAppSelector(
    (state) => state.modals.isTimerModalOpen
  )
  const dispatch = useAppDispatch()

  return (
    <Modal animationType="slide" transparent={true} visible={isTimerModalOpen}>
      <TouchableOpacity
        onPress={() => dispatch(modal_actions.toggleTImerModal())}
        className="flex-1"
      />
      <View
        className="absolute bottom-0 w-full items-center rounded-t-[30px] bg-white py-3"
        style={{ height: windowHeight * 0.97 }}
      >
        <View className="w-16 rounded-lg bg-gray-400 p-[1.5px]" />
        <Container className="px-5">
          <View className="mb-4 flex-row justify-end py-4">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => dispatch(modal_actions.toggleTImerModal())}
            >
              <CloseIcon className="text-gray-500" />
            </TouchableOpacity>
          </View>
          <View className="flex-col justify-between h-4/5">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <Image resizeMode="contain" className="w-3" source={ring} />
                <Text className="text-2xl font-bold">Rasion Project</Text>
              </View>
              <View className="flex-row">
                <Text className="bg-opacity-9 rounded-lg bg-red-50 bg-opacity-25 px-2  py-1 text-red-600">
                  work
                </Text>
              </View>
            </View>
            <View className="my-6 flex-row items-center justify-center">
              <Text className="text-5xl font-bold text-center">00:32:10</Text>
            </View>
            <View className="my-6 mr-5 flex-row items-center justify-center gap-16">
              <TouchableOpacity activeOpacity={0.7} className="flex-col items-center gap-3">
                <View className="rounded-full bg-slate-200 p-4">
                  <PauseIcon />
                </View>
                <Text>Pause</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} className="flex-col items-center gap-3">
                <View className="rounded-full bg-slate-200 p-4">
                  <StopIcon />
                </View>
                <Text>stop</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </View>
    </Modal>
  )
}
