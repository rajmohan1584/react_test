import { configureStore } from "@reduxjs/toolkit"
import postReducer from "./features/posts/postsSlice";
import userRecuder from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userRecuder,
  }
});
