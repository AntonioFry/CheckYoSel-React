const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];

    case "REMOVE_TODO":
      const newTodos = state.filter(todo => {
        return todo.id !== action.todoId;
      });
      return newTodos;
  
    default:
      return state;
  }
}

export default TodoReducer;