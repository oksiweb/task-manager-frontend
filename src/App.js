import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTaskRequest,
  deleteTaskRequest,
  fetchTasksRequest,
  fetchTaskRequest,
  updateTaskRequest,
  clearEditTask,
  updateEditTask
} from './store/actions';

function App() {
  const [newTaskName, setNewTaskName] = useState('');

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const editingTask = useSelector((state) => state.editingTask);

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleCreateTask = (event) => {
    event.preventDefault();
    dispatch(addTaskRequest(newTaskName));
    setNewTaskName('');
  };

  const handleEdit = (event, taskId) => {
    event.preventDefault();
    dispatch(updateTaskRequest(taskId, editingTask.name));
    dispatch(clearEditTask())
  };

  const handleEditTask = (taskId) => {
    dispatch(fetchTaskRequest(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTaskRequest(taskId));
  };

  const handleCancelClick = () => {
    dispatch(clearEditTask())
  }

  const handleEditTaskChange = (e) => {
    const updatedTask = { ...editingTask, name: e.target.value };
    dispatch(updateEditTask(updatedTask));
  }

  return (
    <>
      <form className="task-form" onSubmit={handleCreateTask}>
        <h4>Task Manager</h4>
        <div className="form-control">
          <input
            type="text"
            name="name"
            className="task-input"
            placeholder="e.g. wash dishes"
            value={newTaskName}
            onChange={(event) => setNewTaskName(event.target.value)}
          />
          <button type="submit" className="btn submit-btn">
            Add Task
          </button>
        </div>
      </form>
      <section className="tasks-container">
        {tasks &&
          tasks.map((task) => (
            <div key={task._id} className="task">
              {editingTask?._id === task._id ? (
                <form onSubmit={(event) => handleEdit(event, task._id)}>
                  <div>
                    <input
                      type="text"
                      value={editingTask.name}
                      onChange={(e) => handleEditTaskChange(e)}
                    />
                  </div>

                  <div className="task-buttons">
                    <button type="submit" className="btn">
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelClick}
                      className="btn"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div>{task.name} </div>
                  <div className="task-buttons">
                    <button
                       onClick={() => handleEditTask(task._id)}
                      className="btn"
                    >
                      Edit
                    </button>
                    <button
                      className="task-delete-button btn"
                      onClick={() => handleDeleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
      </section>
    </>
  );
}

export default App;