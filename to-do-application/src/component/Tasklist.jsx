import React from "react";
import Taskitem from "./Taskitem";

const Tasklist = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Taskitem
          key={index}
          task={task}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Tasklist;
