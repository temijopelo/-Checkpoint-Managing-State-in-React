import React from "react";

const Taskitem = ({ task, toggleComplete, editTask, deleteTask }) => {
  return (
    <div className="bg-black">
      <h3>{task.formName}</h3>
      <p>{task.formDescription}</p>

      <button onClick={() => toggleComplete(task)}>Complete</button>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};

export default Taskitem;
