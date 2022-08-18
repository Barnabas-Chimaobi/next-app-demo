import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    payload: []
}


const userSlice = createSlice({
  name : "users",
  initialState,
  reducers: {
    userDetails: (state, {payload}) => {
      state.payload = payload
      return state
    },
    // resetUserDetails: (state) => initialState,
  }
})

export const {
  actions: {userDetails}
} = userSlice

export default userSlice.reducer