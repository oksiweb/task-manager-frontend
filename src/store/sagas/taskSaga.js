import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  setTasks,
  addTaskSuccess,
  deleteTaskSuccess,
  updateTaskSuccess,
} from '../features/taskSlice';

import {
  setEditTask,
  clearEditTask,
  updateEditTask,
} from '../features/editSlice';

import {
  ADD_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
  FETCH_TASKS_REQUEST,
  FETCH_TASK_REQUEST,
  CLEAR_EDIT_TASK,
  CHANGE_EDIT_TASK,
} from '../actionTypes';

const url = `${process.env.REACT_APP_API_URL}/api/v1/tasks`;

function* fetchTasksSaga() {
  try {
    const response = yield call(axios.get, url);
    yield put(setTasks(response.data.tasks));
  } catch (error) {
    console.error(error);
  }
}

function* fetchTaskSaga(action) {
  try {
    const response = yield call(axios.get, `${url}/${action.payload}`);
    yield put(setEditTask(response.data.task));
  } catch (error) {
    console.error(error);
  }
}

function* clearEditTaskSaga(action) {
  try {
    yield put(clearEditTask());
  } catch (error) {
    console.error(error);
  }
}

function* changeEditTaskSaga(action) {
  try {
    yield put(updateEditTask(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* addTaskSaga(action) {
  try {
    const response = yield call(axios.post, url, { name: action.payload });
    yield put(addTaskSuccess(response.data.task));
  } catch (error) {
    console.error(error);
  }
}

function* deleteTaskSaga(action) {
  try {
    yield call(axios.delete, `${url}/${action.payload}`);
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    console.error(error);
  }
}

function* updateTaskSaga(action) {
  try {
    const response = yield call(
      axios.patch,
      `${url}/${action.payload.taskId}`,
      { name: action.payload.name }
    );
    yield put(updateTaskSuccess(response.data.task));
  } catch (error) {
    console.error(error);
  }
}

function* taskSaga() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasksSaga);
  yield takeEvery(FETCH_TASK_REQUEST, fetchTaskSaga);
  yield takeEvery(ADD_TASK_REQUEST, addTaskSaga);
  yield takeEvery(DELETE_TASK_REQUEST, deleteTaskSaga);
  yield takeEvery(UPDATE_TASK_REQUEST, updateTaskSaga);
  yield takeEvery(CLEAR_EDIT_TASK, clearEditTaskSaga);
  yield takeEvery(CHANGE_EDIT_TASK, changeEditTaskSaga);
}

export default taskSaga;
