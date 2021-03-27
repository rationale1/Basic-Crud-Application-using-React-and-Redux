import React from "react";
import { useSelector } from "react-redux";
import TableData from "./TableData";

const TableRow = () => {
  const { tableData } = useSelector(state => state.tableReducer);

  return tableData.map(data => {
    return <TableData key={data.id} data={data} />;
  });
};

export default TableRow;
