import React from 'react'
import {
  Modal,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { modal_actions } from '../../store/modal.slice'
import { CloseIcon } from '../../Icons'
import colors from 'tailwindcss/colors'

export const TaskForm = () => {
  const windowHeight = Dimensions.get('window').height
  const isTaskFormOpen = useAppSelector((state) => state.modals.isTaskFormOpen)
  const dispatch = useAppDispatch()

  return (
    <Modal animationType="slide" transparent={true} visible={isTaskFormOpen}>
      <TouchableOpacity
        onPress={() => dispatch(modal_actions.toggleTaskForm())}
        className="flex-1"
      />
      <View
        className="absolute bottom-0 w-full items-center rounded-t-[30px] bg-white py-3 shadow-2xl shadow-black"
        style={{ height: windowHeight * 0.55 }}
      >
        <View className="w-16 rounded-lg bg-gray-400 p-[1.5px]" />
        <View className="container px-5">
          <View className="flex-row justify-end py-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => dispatch(modal_actions.toggleTaskForm())}
            >
              <CloseIcon className="text-gray-500" />
            </TouchableOpacity>
          </View>
          <View className="mb-4 w-full">
            <Text className="text-xl font-bold">New Task</Text>
          </View>
          <View>
            <View className="mb-2">
              <Text className="py-1">Task Name</Text>
              <TextInput
                cursorColor={colors.gray[500]}
                className="rounded-lg border-2 border-transparent bg-slate-200 px-3 py-1 focus:border-gray-400 "
                placeholder="Task Name"
              />
            </View>
            <View className="mb-2">
              <Text className="py-1">Select category</Text>
              <TextInput
                cursorColor={colors.gray[500]}
                className="rounded-lg border-2 border-transparent bg-slate-200 px-3 py-1 focus:border-gray-400"
                placeholder="Category name"
              />
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="mt-4 items-center rounded-lg bg-purple-600 p-3"
              >
                <Text className="font-semibold text-white">Add Task</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                className="mt-4 items-center rounded-lg p-2"
                onPress={() => dispatch(modal_actions.toggleTaskForm())}
              >
                <Text className="text-lg font-semibold text-gray-600">
                  Quit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}