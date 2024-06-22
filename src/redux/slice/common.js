import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateCommonState: (state, action) => {
      const payload = action?.payload;
      
      return {
        ...state,
        ...(typeof payload === 'object' ? payload : {})
      };
    },
  },
})

export const { updateCommonState } = commonSlice.actions

export default commonSlice.reducer