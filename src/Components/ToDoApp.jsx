import React, { useEffect, useState } from "react";

function ToDoApp(props) {
  const [todos, setTodos] = useState([]);
  // Get todos from the local storage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const saveToDo = (e) => {
    e.preventDefault();
    const todoInput = e.target.todo_input.value;
    if (!todoInput) {
      alert("Please enter a task!");
      return;
    }
    if (!todos.includes(todoInput)) {
      const newTodos = [...todos, todoInput];
      setTodos(newTodos);
      e.target.todo_input.value = "";
    } else {
      alert("Task already exists!");
    }
  };

  const handleEdit = (e) => {
    const index = parseInt(e.target.dataset.index);
    if (isNaN(index)) {
      console.error("Invalid index value");
      return;
    }
    const currentTask = todos[index];
    const updatedTask = prompt("Edit task", currentTask);
    if (updatedTask && updatedTask !== currentTask) {
      const newTodos = [...todos];
      newTodos[index] = updatedTask;
      setTodos(newTodos);
    }
  };

  const handleDelete = (e) => {
    const index = parseInt(e.target.dataset.index);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Add in Local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container w-50 p-5">
      <h1>To Do App</h1>
      <form className="row gap-1" onSubmit={saveToDo}>
        <input
          style={{ outline: "none", border: "none" }}
          className="py-2 px-3 col col-10 rounded"
          type="text"
          placeholder="Add a new task"
          name="todo_input"
        />
        <button type="submit" className="col btn btn-success">
          Add
        </button>
      </form>
      <div className="my-3">
        <h3>Tasks</h3>
        <ul className="list-group my-2" data-bs-theme={props.mode}>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div>
                <span className="bg-warning rounded-pill p-2 text-dark">
                  {index + 1}
                </span>
                &nbsp; {todo}
              </div>
              <div>
                <button
                  onClick={handleEdit}
                  className="btn btn-info mx-1"
                  data-index={index}
                >
                  &#x270E;
                </button>

                <button
                  onClick={handleDelete}
                  className="btn btn-danger mx-1"
                  data-index={index}
                >
                  &#10006;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
