// src/components/TaskCard.js
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-gray-700">{task.description}</p>
      <span
        className={`inline-block px-3 py-1 text-sm rounded-full ${
          task.status === 'To Do'
            ? 'bg-blue-500 text-white'
            : task.status === 'In Progress'
            ? 'bg-yellow-500 text-white'
            : 'bg-green-500 text-white'
        }`}
      >
        {task.status}
      </span>
    </div>
  );
};

export default TaskCard;
