import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    fieldType: '',
    fieldName: ''
}


const formSlice = createSlice({
  name : "users",
  initialState,
  reducers: {
    fieldType: (state, {payload}) => {
      state.fieldType = payload
      return state
    },
    fieldName: (state, {payload}) => {
        state.fieldName = payload
        return state
      },
    // resetUserDetails: (state) => initialState,
  }
})

export const {
  actions: {fieldName, fieldType}
} = formSlice

export default formSlice.reducer