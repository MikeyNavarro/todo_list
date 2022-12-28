import React from "react";
import ListMap from "./ListMap";

const Todo = ({ todos, setTodos, id, setId }) => {
  return (
    <main className="mt-3">
      <div className="card">
        <h2 className="card-header text-end m-3">Your Todos</h2>
        <div className="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Todo</th>
                <th scope="col">ID</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <ListMap todos={todos} />
        </div>
      </div>
    </main>
  );
};

export default Todo;
