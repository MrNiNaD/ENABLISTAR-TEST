import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      const payload = action?.payload;
      
      return {
        ...state,
        ...(typeof payload === 'object' ? payload : {})
      };
    },
    addNewUser: (state, action) => {
      const payload = action?.payload;
      
      state.data = [
        ...state?.data,
        payload
      ];
    }
  },
})

export const { updateUserState, addNewUser } = counterSlice.actions

export default counterSlice.reducer