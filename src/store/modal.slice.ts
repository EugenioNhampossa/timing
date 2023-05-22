import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
  isActivityFormOpen: boolean
  isTimerModalOpen: boolean
}

const initialState: ModalsState = {
  isActivityFormOpen: false,
  isTimerModalOpen: false,
}

const uiSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleActivityForm(state) {
      state.isActivityFormOpen = !state.isActivityFormOpen
    },
    toggleTImerModal(state) {
      state.isTimerModalOpen = !state.isTimerModalOpen
    },
  },
})

export const modal_actions = uiSlice.actions
export default uiSlice
