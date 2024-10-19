import { useEffect, useState } from "react";
import Taskform from "./component/Taskform";
import Tasklist from "./component/Tasklist";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleComplete = (taskToToggle) => {
    setTasks(
      tasks.map((task) =>
        task === taskToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskToEdit) => {
    const newName = prompt("Enter new task name", taskToEdit.name);
    const newDescription = prompt(
      "Enter new task description",
      taskToEdit.description
    );

    if (newDescription && newName) {
      setTasks(
        tasks.map((task) =>
          task === taskToEdit
            ? { ...task, name: newName, description: newDescription }
            : task
        )
      );
    }
  };

  const deleteTask = (taskToDelete) => {
    if (window.confirm("Are you sure you want to delete this task")) {
      setTasks(tasks.filter((task) => task !== taskToDelete));
    }
  };

  return (
    <div>
      <h1>TO DO APPLICATION</h1>
      <Taskform addTask={addTask} />
      <Tasklist
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
