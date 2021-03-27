import React from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../Redux/actions/tableAction";

const TableData = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteData(id));
  };
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.info}</td>
      <td>{data.price}</td>
      <td>{data.company}</td>

      <td>
        <button className="btn primary">Edit</button>

        <button className="btn danger" onClick={() => handleDelete(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableData;
