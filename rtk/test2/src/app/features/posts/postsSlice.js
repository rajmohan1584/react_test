import { createSlice } from '@reduxjs/toolkit';
import PostsList from './PostsList';

const initialState = [
  {id:1, title: 'Learning rtk', content:'blah blah'},
  {id:2, title: 'Learning ts', content:'blah2 blah2'}
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    }
  }
})

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;

