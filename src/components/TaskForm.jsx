// src/components/TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    status: 'To Do',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(taskData));
    setTaskData({ title: '', description: '', status: 'To Do' });
  };

  return (
    <form className="bg-white p-6 shadow-md rounded-md mb-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Add a New Task</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="title">
          Task Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={taskData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="status">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={taskData.status}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded-md"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
