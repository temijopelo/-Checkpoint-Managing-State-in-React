import React from "react";

const Taskitem = ({ task, toggleComplete, editTask, deleteTask }) => {
  return (
    <div
      className={`bg-black mt-5  text-white p-5 flex gap-16  justify-between rounded-md ${
        task.completed ? "line-through" : "none"
      }`}
    >
      <div>
        <h3 className="text-lg font-bold">{task.formName}</h3>
        <p className="italic text-sm">{task.formDescription}</p>
      </div>

      <div className="flex gap-2 p-1">
        <button
          className="hover:bg-green-500 p-2 rounded-md"
          onClick={() => toggleComplete(task)}
        >
          Complete
        </button>
        <button
          className="hover:bg-purple-400 p-2 rounded-md"
          onClick={() => editTask(task)}
        >
          Edit
        </button>
        <button
          className="hover:bg-red-700 p-2 rounded-md"
          onClick={() => deleteTask(task)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Taskitem;
