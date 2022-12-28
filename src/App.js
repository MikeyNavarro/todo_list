import React, { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import "./bootstrap.css";
import Todo from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState();
  return (
    <div>
      <Nav />
      <Form todos={todos} setTodos={setTodos} id={id} setId={setId} />
      <Todo todos={todos} setTodos={setTodos} id={id} />
    </div>
  );
};

export default App;
