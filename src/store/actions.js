import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_REQUEST,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_REQUEST,
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  CLEAR_EDIT_TASK,
  CHANGE_EDIT_TASK,
} from './actionTypes';

// actions.js

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST,
});

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: { tasks },
});

export const fetchTaskRequest = (id) => ({
  type: FETCH_TASK_REQUEST,
  payload: id,
});

export const fetchTaskSuccess = (task) => ({
  type: FETCH_TASK_SUCCESS,
  payload: { task },
});

export const clearEditTask = () => ({
  type: CLEAR_EDIT_TASK,
});

export const updateEditTask = (task) => ({
  type: CHANGE_EDIT_TASK,
  payload: task,
});

export const addTaskRequest = (name) => ({
  type: ADD_TASK_REQUEST,
  payload: name,
});

export const addTaskSuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  payload: { task },
});

export const deleteTaskRequest = (taskId) => ({
  type: DELETE_TASK_REQUEST,
  payload: taskId,
});

export const deleteTaskSuccess = (taskId) => ({
  type: DELETE_TASK_SUCCESS,
  payload: { taskId },
});

export const updateTaskRequest = (taskId, name) => ({
  type: UPDATE_TASK_REQUEST,
  payload: { taskId, name },
});

export const updateTaskSuccess = (task) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: task,
});
