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
      rowAssigned: "bel-dono",
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

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
