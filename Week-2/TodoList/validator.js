// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return false;
  }
  return true;
}

// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const validPriorities = ["low", "medium", "high"];
  return validPriorities.includes(priority);
}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
  const dueDate = new Date(date);
  const today = new Date();

  return dueDate > today;
}

// Export validation functions
export { validateTitle, validatePriority, validateDueDate };
