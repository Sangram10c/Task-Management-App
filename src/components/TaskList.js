import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDelete, onEdit, onMove }) => {
  const taskStatuses = ["To Do", "In Progress", "Completed"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {taskStatuses.map((status) => (
        <div key={status} className="bg-slate-300 p-4 rounded-lg shadow-lg my-4">
          <h2 className={`text-xl font-bold mb-4 border-b-2 pb-2 text-gray-800`}>
            {status}
          </h2>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDelete={onDelete}
                onEdit={onEdit}
                onMove={onMove}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
