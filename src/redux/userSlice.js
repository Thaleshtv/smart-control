import { createSlice } from '@reduxjs/toolkit'

const tokenUser = localStorage.getItem('accesToken')
const loged = tokenUser != null ? true : false


export const slice = createSlice({
  name: 'user',
  initialState: {
    nameUser: '',
    isLoged: loged,
    token: tokenUser
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLoged: true, nameUser: payload.nameUser, token: payload.token }
    },
    logOut(state) {
      return { ...state, isLoged: false, nameUser: '', token: '' }
    }
  }
})

export const { changeUser, logOut } = slice.actions

export const selectUser = (state) => state.user

export default slice.reducer
