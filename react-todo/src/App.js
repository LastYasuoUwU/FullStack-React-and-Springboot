import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const todos = [
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
  ];

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New Todo",
        rowAssigned: "Anonymous User",
      };
      todos.push(newTodo);
      console.log("todos list: ", todos);
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
        </div>
      </div>
    </div>
  );
}

export default App;
