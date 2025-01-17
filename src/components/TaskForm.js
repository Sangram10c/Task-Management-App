// src/components/TaskForm.js
import React, { useState, useEffect } from "react";

const TaskForm = ({ onAddTask, taskToEdit, onUpdateTask, onCancelEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      if (taskToEdit) {
        onUpdateTask({ ...taskToEdit, title, description });
      } else {
        onAddTask({ title, description, status: "To Do" });
      }
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      className="bg-slate-300 shadow-md rounded p-6 max-w-md mx-auto mt-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">
        {taskToEdit ? "Edit Task" : "Add a New Task"}
      </h2>
      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
        {taskToEdit && (
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
