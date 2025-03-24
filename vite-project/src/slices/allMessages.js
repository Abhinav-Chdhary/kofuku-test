import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  meta: {},
};

const allMessages = createSlice({
  name: "allMessages",
  initialState: initialState,
  reducers: {
    addMessage(state, action) {
      const { receiver, sender, message } = action.payload;
      const chatId = sender + ":" + receiver;
      if (!state.data[chatId]) state.data[chatId] = [];
      state.data[chatId].push(message);
    },
  },
});

export const { addMessage } = allMessages.actions;
export default allMessages.reducer;
