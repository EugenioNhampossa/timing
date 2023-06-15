import React, { useState } from 'react'
import {
  Modal,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { modal_actions } from '../../store/modal.slice'
import { CloseIcon } from '../../Icons'
import colors from 'tailwindcss/colors'
import { useMutate } from '../../hooks/useMutate'
import { KEYS } from '../../utils'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import uuid from 'react-native-uuid'
import { Select } from '../../components'

const taskSchema = yup.object({
  title: yup
    .string()
    .required('Insira o título')
    .min(2, 'O título deve ter pelo menos 2 caracteres'),
  tag: yup.string().required('Seleccione o Tipo de armazém'),
})

export const TaskForm = () => {
  const windowHeight = Dimensions.get('window').height
  const isTaskFormOpen = useAppSelector((state) => state.modals.isTaskFormOpen)
  const dispatch = useAppDispatch()

  const { mutate, isLoading } = useMutate(KEYS.tasks)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskSchema),
  })

  const onSubmit = async ({ title, tag }: yup.InferType<typeof taskSchema>) => {
    const task = {
      id: uuid.v4(),
      title,
      tag,
      nrPlayed: 0,
    }
    const res = await mutate(task)
    if (res) {
      Alert.alert('Success', 'Task created')
      reset()
    } else {
      Alert.alert('Error', 'Something went wrong')
    }
  }

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
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    cursorColor={colors.gray[500]}
                    className="rounded-lg border-2 border-transparent bg-slate-200 px-3 py-1 focus:border-gray-400 "
                    placeholder="Task Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
                name="title"
              />
              {errors.title && (
                <Text className="text-red-400">Required field</Text>
              )}
            </View>
            <View className="mb-2">
              <Text className="py-1">Select a tag</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange } }) => (
                  <Select onChange={onChange} />
                )}
                name="tag"
              />
              {errors.tag && (
                <Text className="text-red-400">Required field</Text>
              )}
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="mt-4 items-center rounded-lg bg-purple-600 p-3"
                onPress={handleSubmit(onSubmit)}
              >
                {isLoading ? (
                  <ActivityIndicator color={colors.gray[200]} />
                ) : (
                  <Text className="font-semibold text-white">Add Task</Text>
                )}
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
