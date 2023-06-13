import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
  isTaskFormOpen: boolean
  isTimerModalOpen: boolean
}

const initialState: ModalsState = {
  isTaskFormOpen: false,
  isTimerModalOpen: false,
}

const uiSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleTaskForm(state) {
      state.isTaskFormOpen = !state.isTaskFormOpen
    },
    toggleTImerModal(state) {
      state.isTimerModalOpen = !state.isTimerModalOpen
    },
  },
})

export const modal_actions = uiSlice.actions
export default uiSlice
