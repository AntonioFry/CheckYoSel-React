export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo
});

export const removeTodo = (todoId) => ({
  type: "REMOVE_TODO",
  todoId
});

export const toggleUrgency = (todoId) => ({
  type: "TOGGLE_URGENCY",
  todoId
});