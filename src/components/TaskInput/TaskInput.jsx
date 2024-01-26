import { useState } from "react";
import PropTypes from "prop-types";

const TaskInput = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <div className="flex gap-6 mt-4">
      <input
        type="text"
        placeholder="add details"
        className="flex-1 w-full border-[1px] border-gray-300 rounded-lg px-2"
        value={newTask}
        onChange={handleInputChange}
      />
      <button
        className="text-white bg-purple-700 px-7 py-3 rounded-lg"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

TaskInput.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onDeleteAllTasks: PropTypes.func.isRequired,
};

export default TaskInput;
