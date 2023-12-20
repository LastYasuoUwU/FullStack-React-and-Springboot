import React, { useState } from "react";

function NewTodoForm() {
  const [description, setDescritpion] = useState("");
  const [assigned, setAssigned] = useState("");

  //   const descritpionChange = (event) => {
  //     console.log("description: ", event.target.value);
  //     setDescritpion(event.target.value);
  //   };

  //   const assignedChange = (event) => {
  //     console.log("assigned: ", event.target.value);
  //     setAssigned(event.target.value);
  //   };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescritpion(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary mt-3">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;