import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="flex  flex-col  items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="px-4 py-2 border rounded-lg"
          placeholder="Add a task..."
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
        >
          Add Task
        </button>
      </div>
      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center px-4 py-2 mb-2 rounded-lg ${
              task.completed ? "bg-green-100 line-through" : "bg-white"
            } shadow`}
          >
            <span onClick={() => handleToggleTask(task.id)}>{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700 px-2 py-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
