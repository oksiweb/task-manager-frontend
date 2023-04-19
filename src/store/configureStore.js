import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import taskReducer from './features/taskSlice';
import editTaskReducer from './features/editSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/taskSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  tasks: taskReducer,
  editingTask: editTaskReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
