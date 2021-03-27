import React from "react";

const TableInputs = () => {
  return (
    <tr>
      <td>
        <input type="text" name="title" placeholder="Enter title" required />
      </td>
      <td>
        <input type="text" name="info" placeholder="Enter info" required />
      </td>
      <td>
        <input type="text" name="price" placeholder="Enter price" required />
      </td>
      <td>
        <input
          type="text"
          name="company"
          placeholder="Enter company"
          required
        />
      </td>

      <td>
        <button type="button" className="btn add">
          Add New Row
        </button>
      </td>
    </tr>
  );
};

export default TableInputs;
