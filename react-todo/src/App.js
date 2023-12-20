import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Learn react fundamentals",
      rowAssigned: "bel-dono",
    },
    {
      rowNumber: 2,
      rowDescription: "Play games",
      rowAssigned: "Hasafeed",
    },
    {
      rowNumber: 3,
      rowDescription: "Make dinner",
      rowAssigned: "Kyuubi",
    },
    {
      rowNumber: 4,
      rowDescription: "Do some stuffs",
      rowAssigned: "Zed",
    },
  ]);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New Todo",
        rowAssigned: "Anonymous User",
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
