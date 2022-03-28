import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    nameUser: '',
    isLoged: false
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLoged: true, nameUser: payload }
    },
    logOut(state) {
      return { ...state, isLoged: false, nameUser: '' }
    }
  }
})

export const { changeUser, logOut } = slice.actions

export const selectUser = (state) => state.user

export default slice.reducer
