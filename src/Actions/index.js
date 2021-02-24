export const addTodo = (todo) => ({
  type: "ADD_TODO",
  todo
});

export const removeTodo = (todoId) => ({
  type: "REMOVE_TODO",
  todoId
});