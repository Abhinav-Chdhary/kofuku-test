import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  meta: {},
};

const allUsers = createSlice({
  name: "allUsers",
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      const { userId, data } = action.payload;
      state.data[userId] = data;
      state.data[userId].online = false;
    },
    toggleOnline(state, action) {
      const { userId } = action.payload;
      state.data[userId].online = !state.data[userId].online;
    },
  },
});

export const { addUser, toggleOnline } = allUsers.actions;
export default allUsers.reducer;
