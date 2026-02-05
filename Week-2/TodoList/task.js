// Import validator functions
import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let taskIdCounter = 1;

// 1. Add new task
function addTask(title, priority, dueDate) {
  if ( !validateTitle(title) || !validatePriority(priority) || !validateDueDate(dueDate)) {
    return "Invalid task details";
  }

  const task = {
    id: taskIdCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return "Task added successfully";
}

// 2. Get all tasks
function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Task not found";
  }

  task.completed = true;
  return "Task marked as completed";
}

// Export functions
export { addTask, getAllTasks, completeTask };
