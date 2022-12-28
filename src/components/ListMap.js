import React, { useState } from "react";

const ListMap = ({ todos }) => {
  const [checked, setChecked] = useState(false);

  return (
    <section>
      {todos.map((todo) => (
        <li
          style={
            checked
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
          key={todo.currentTodo + 1}
          className="list-group-item bg-dark"
        >
          {todo.currentTodo}

          <button style={{ marginLeft: "1000px" }}>Delete</button>
        </li>
      ))}
    </section>
  );
};

export default ListMap;
