import PropTypes from "prop-types";
import { FaRegTrashAlt } from "react-icons/fa";

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="mt-7 flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              name="todo"
              id={`todo-${task.id}`}
              className="w-5 h-5"
              checked={task.completed}
              onChange={() => onComplete(task.id)}
            />
            <label
              htmlFor={`todo-${task.id}`}
              className={task.completed ? "line-through" : ""}
            >
              {task.text}
            </label>
          </div>
          <button onClick={() => onDelete(task.id)}>
            <FaRegTrashAlt className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
