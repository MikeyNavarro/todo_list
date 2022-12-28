import React, { useState } from "react";

const Form = ({ todos, setTodos, id, setId }) => {
  const [currentTodo, setCurrentTodo] = useState("");

  const currentTodoChangeHandler = (e) => {
    setCurrentTodo(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, currentTodo]);
    setCurrentTodo("");
  };
  return (
    <div>
      <h2>Add a Todo</h2>
      <form onSubmit={addTodoHandler}>
        <input
          onChange={currentTodoChangeHandler}
          className="form-control"
          type="text"
          value={currentTodo}
        />
        <button className="mt-3">Sumbit</button>
      </form>
    </div>
  );
};

export default Form;
