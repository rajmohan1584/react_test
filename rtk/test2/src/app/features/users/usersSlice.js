import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: 0, name: 'Roshni Mohan'},
  {id: 1, name: 'Nitesh Mohan'},
  {id: 2, name: 'Prabha Mohan'},
  {id: 3, name: 'Raj Mohan'},
]

const userSlice = createSlice ({
  name: 'users',
  initialState,
  reducers: {

  }
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;