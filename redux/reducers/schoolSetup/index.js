import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  department: [],
  session: [],
  programme: [],
  faculty: [],
}


const schoolSetupSlice = createSlice({
  name : "schoolSetup",
  initialState,
  reducers: {
    session: (state, {payload}) => {
      state.session = payload
      return state
    },
    programme: (state, {payload}) => {
      state.programme = payload
      return state
    },
    faculty: (state, {payload}) => {
      state.faculty = payload
      return state
    },
    department: (state, {payload}) => {
        state.department = payload
        return state
      },
    // resetUserDetails: (state) => initialState,
  }
})

export const {
  actions: {programme, session, department, faculty}
} = schoolSetupSlice

export default schoolSetupSlice.reducer