import React from "react";

const TaskCard = ({ task, onDelete, onEdit, onMove }) => {
  // Assign unique colors for different statuses
  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "bg-red-100 border-red-500";
      case "In Progress":
        return "bg-yellow-100 border-yellow-500";
      case "Completed":
        return "bg-green-100 border-green-500";
      default:
        return "bg-gray-100 border-gray-500";
    }
  };

  return (
    <div
      className={`border-l-4 rounded-lg p-4 mb-4 shadow-md ${
        getStatusColor(task.status)
      }`}
    >
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p className="text-sm text-gray-700">{task.description}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
        <div className="flex gap-2">
          {task.status !== "To Do" && (
            <button
              onClick={() => onMove(task, "To Do")}
              className="bg-red-500 text-white text-sm px-2 py-1 rounded-lg"
            >
              To Do
            </button>
          )}
          {task.status !== "In Progress" && (
            <button
              onClick={() => onMove(task, "In Progress")}
              className="bg-yellow-500 text-white text-sm px-2 py-1 rounded-lg"
            >
              In Progress
            </button>
          )}
          {task.status !== "Completed" && (
            <button
              onClick={() => onMove(task, "Completed")}
              className="bg-green-500 text-white text-sm px-2 py-1 rounded-lg"
            >
              Completed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
