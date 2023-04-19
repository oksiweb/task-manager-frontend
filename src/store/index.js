import store from './configureStore';
import * as taskActions from './actions';

export { taskActions };
export {
  FETCH_TASKS_REQUEST,
  FETCH_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  UPDATE_TASK_REQUEST,
} from './actionTypes';
export { default as taskReducer } from './features/taskSlice';

export default store;
