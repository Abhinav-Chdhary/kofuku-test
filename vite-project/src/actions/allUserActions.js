import { addUser, toggleOnline } from "../slices/allUsers";
import { store } from "../store";

export const addOneUser = (emailId) => {
  store.dispatch(addUser({ userId: emailId, data: { emailId: emailId } }));
};
export const toggleOneUserOnline = (emailId) => {
  store.dispatch(toggleOnline({ userId: emailId }));
};
