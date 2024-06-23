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
    },
    editUser: (state, action) => {
      const payload = action?.payload;
      
      state.data = state.data.map((eachData) => {
        if (eachData?.id === payload?.id) {
          return payload;
        }

        return eachData;
      });
    }
  },
})

export const { updateUserState, addNewUser, editUser } = counterSlice.actions

export default counterSlice.reducer