import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks((prevTasks) => (storedTasks.length ? storedTasks : prevTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    const newTaskObject = {
      id: new Date().getTime(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const filterTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="container max-w-[700px]">
        <h1 className="font-semibold text-4xl text-center py-10">#todo</h1>
        <Header onFilterChange={setFilter} />
        <hr />
        <TaskInput onAddTask={addTask} />
        <TaskList
          tasks={filterTasks()}
          onComplete={completeTask}
          onDelete={deleteTask}
        />
        <div className="mt-4 flex justify-center">
          <button
            className="text-white bg-red-700 px-7 py-3 rounded-lg"
            onClick={deleteAllTasks}
          >
            Delete All Tasks
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
