import { addMessage } from "../slices/allMessages";
import { store } from "../store";

export const addOneMessage = (sender, receiver, message) => {
  store.dispatch(addMessage({ sender, receiver, message }));
};
