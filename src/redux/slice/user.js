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
    },
    deleteUser: (state, action) => {
      const payload = action?.payload;
      
      state.data = state.data.filter((eachData) => !payload.includes(eachData?.id));
    }
  },
})

export const { updateUserState, addNewUser, editUser, deleteUser } = counterSlice.actions

export default counterSlice.reducer