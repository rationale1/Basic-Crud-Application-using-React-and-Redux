import React from "react";

const TableData = ({ data }) => {
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.info}</td>
      <td>{data.price}</td>
      <td>{data.company}</td>

      <td>
        <button className="btn primary">Edit</button>
        <button className="btn danger">Delete</button>
      </td>
    </tr>
  );
};

export default TableData;
