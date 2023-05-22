import React from 'react'
import { Modal, View, Dimensions, TouchableOpacity } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Container } from '../../components'
import { modal_actions } from '../../store/modal.slice'
import { CloseIcon } from '../../Icons'

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
        <Container className="px-5">
          <View className="mb-4 flex-row justify-end py-4">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => dispatch(modal_actions.toggleTImerModal())}
            >
              <CloseIcon className="text-gray-500" />
            </TouchableOpacity>
          </View>
        </Container>
      </View>
    </Modal>
  )
}
