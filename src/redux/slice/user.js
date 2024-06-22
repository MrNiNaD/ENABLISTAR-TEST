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
  },
})

export const { updateUserState } = counterSlice.actions

export default counterSlice.reducer