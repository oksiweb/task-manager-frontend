import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
    addTaskSuccess: (state, action) => [...state, action.payload],
    deleteTaskSuccess: (state, action) =>
      state.filter((task) => task._id !== action.payload),
    updateTaskSuccess: (state, action) =>
      state.map((task) =>
        task._id === action.payload._id ? action.payload : task
      ),
  },
});

export const {
  setTasks,
  addTaskSuccess,
  deleteTaskSuccess,
  updateTaskSuccess,
} = taskSlice.actions;

export default taskSlice.reducer;
