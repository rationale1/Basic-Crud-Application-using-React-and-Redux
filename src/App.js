import React from "react";
import "./Index.css";
import TableInputs from "./components/TableInputs";
import TableRow from "./components/TableRow";

const App = () => {
  return (
    <div className="container">
      <h2>React Crud Operations</h2>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Information</th>
              <th>Price</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TableInputs />

            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
