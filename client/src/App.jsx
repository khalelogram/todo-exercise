import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import axios from "axios";
function App() {
  const [tasks, setTasks] = useState([]);

  async function loadSavedTasks() {
    const saved = await axios.get("http://localhost:3000/api/todos");
    if(saved.data) {
      setTasks(saved.data);
    }
  }

  async function setTasksAndSave(newTasks) {
    // setTasks(newTasks);
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    const added = await axios.post("http://localhost:3000/api/todos", newTasks);

    if(added.data) {
      setTasks(newTasks)
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
    setTasksAndSave([...tasks, {
      title: taskTitle,
      status: "active"
    }]);
  }

  async function deleteTaskById(taskId) {
    const deleted = await axios.delete(`http://localhost:3000/api/todos/${taskId}`);
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  async function toggleTaskCompletedById(taskId) {
    const toggleTodo = await axios.patch(`http://localhost:3000/api/todos/${taskId}`, {status: "completed"})
  }

  return (
    <>
      <Header handleAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

export default App