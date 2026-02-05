// Import task functions
import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks
console.log(addTask("Learn JavaScript", "high", "2026-02-10"));
console.log(addTask("Practice DSA", "medium", "2026-02-15"));
console.log(addTask("Go Gym", "low", "2024-01-01")); // invalid (past date)

// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(1));

// 4. Display all tasks again
console.log("Updated Tasks:");
console.log(getAllTasks());
