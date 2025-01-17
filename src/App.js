// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task === taskToEdit ? updatedTask : task)));
    setTaskToEdit(null);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  const moveTask = (taskToMove, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task === taskToMove ? { ...task, status: newStatus } : task
      )
    );
  };

  const editTask = (task) => {
    setTaskToEdit(task);
  };

  const cancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-8">
  <Header />
  <div className="max-w-5xl mx-auto">
    <TaskForm
      onAddTask={addTask}
      taskToEdit={taskToEdit}
      onUpdateTask={updateTask}
      onCancelEdit={cancelEdit}
    />
    <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} onMove={moveTask} />
  </div>
</div>

  );
};

export default App;
