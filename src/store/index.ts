import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './modal.slice'

const store = configureStore({
  reducer: {
    modals: uiSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
