import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../Redux/actions/tableAction";

const TableInputs = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    info: "",
    price: "",
    company: "",
  });

  const { selectedData, editable } = useSelector(state => state.tableReducer);
  console.log(selectedData);

  /**........................Use Effect............................. */
  useEffect(() => {
    if (selectedData !== null) setInputValue(selectedData);
  }, [selectedData]);

  const dispatch = useDispatch();

  const onChange = e =>
    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = e => {
    if (selectedData !== null) {
      const update = {
        id: selectedData,

        ...inputValue,
      };

      dispatch(updateData(update));
    } else {
      const { title, info, price, company } = inputValue;

      // Simple Validation Check...
      if (title !== "" && info !== "" && price !== "" && company !== "") {
        const newData = {
          id: Math.random(),
          ...inputValue,
        };

        dispatch(addData(newData));
      }
    }

    setInputValue({ title: "", info: "", price: "", company: "" }); // Reset the input fields back to default...
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          required
          value={inputValue.title}
          onChange={onChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="info"
          placeholder="Enter info"
          required
          value={inputValue.info}
          onChange={onChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          placeholder="Enter price"
          required
          value={inputValue.price}
          onChange={onChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="company"
          placeholder="Enter company"
          required
          value={inputValue.company}
          onChange={onChange}
        />
      </td>

      <td>
        <button
          type="button"
          className={`btn add ${editable && "save"}`}
          onClick={handleSubmit}>
          {editable ? "Save" : " Add New Row"}
        </button>
      </td>
    </tr>
  );
};

export default TableInputs;
