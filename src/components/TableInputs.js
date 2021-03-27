import React, { useState } from "react";

const TableInputs = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    info: "",
    price: "",
    company: "",
  });

  const onChange = e =>
    setInputValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

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
        <button type="button" className="btn add">
          Add New Row
        </button>
      </td>
    </tr>
  );
};

export default TableInputs;
