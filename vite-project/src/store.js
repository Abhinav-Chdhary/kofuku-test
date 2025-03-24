import { configureStore } from "@reduxjs/toolkit";
import allUsers from "./slices/allUsers";
import allMessages from "./slices/allMessages";

export const store = configureStore({
  reducer: {
    allUsers: allUsers,
    allMessages: allMessages,
  },
});
