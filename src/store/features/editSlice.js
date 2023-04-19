import { createSlice } from '@reduxjs/toolkit';

const editTaskSlice = createSlice({
  name: 'editTask',
  initialState: null,
  reducers: {
    setEditTask: (state, action) => action.payload,
    clearEditTask: () => null,
    updateEditTask: (state, action) => {
      if (state && state._id === action.payload._id) {
        return { ...state, ...action.payload };
      }
      return state;
    },
  },
});

export const { setEditTask, clearEditTask, updateEditTask } =
  editTaskSlice.actions;

export default editTaskSlice.reducer;
