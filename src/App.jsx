// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Task Manager</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<TaskForm />} />
            <Route path="tasks" element={<TaskCard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
