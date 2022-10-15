import React from "react";
// Import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos ,filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          //key use to remove error from react
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
