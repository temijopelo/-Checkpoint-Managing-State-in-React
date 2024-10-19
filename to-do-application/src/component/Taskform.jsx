import React, { useState } from "react";

const Taskform = ({ addTask }) => {
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formDescription) {
      alert("Please fill fields");
      return;
    }

    addTask({ formName, formDescription, completed: false });
    setFormName("");
    setFormDescription("");
  };
  return (
    <div>
      <div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter task name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            className="border-2 border-blue-100 rounded-2xl p-2"
          />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Describe task"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
            className="border-2 border-blue-100 rounded-2xl p-2"
          />

          <button
            className="bg-purple-400 rounded-full py-1 px-5"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Taskform;
