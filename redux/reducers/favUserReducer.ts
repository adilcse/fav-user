import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  users: [],
};

const favUserSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addFav: (state, action) => {
      console.log(action)
      state.users = [...state.users, action.payload];
    },
    removeFav: (state, action) => {
      state.users = state.users.filter((user: User) => user.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav } = favUserSlice.actions;
export default favUserSlice.reducer;
