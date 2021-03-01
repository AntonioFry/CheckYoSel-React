const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];

    case "REMOVE_TODO":
      const newTodos = state.filter(todo => {
        return todo.id !== action.todoId;
      });
      return newTodos;

    case "TOGGLE_URGENCY":
      return state.map(todo => {
        if (todo.id === action.todoId) {
          todo.urgent = !todo.urgent;
        }
        return todo
      });

    default:
      return state;
  }
}

export default TodoReducer;