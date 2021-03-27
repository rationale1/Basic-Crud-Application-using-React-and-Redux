/** ..........................Actions Types........................... */
import {
  ADD_DATA,
  DELETE_DATA,
  SELECTED_DATA,
  UPDATE_DATA,
} from "../actions/tableAction";

/** ..........................Initial State........................... */

const initState = {
  tableData: [
    {
      id: 1,
      title: "Car",
      price: 10,
      company: "Toyota",
      info: "One of the best car",
      inCart: false,
      count: 1,
    },
    {
      id: 2,
      title: "Bike",
      price: 20,
      company: "Honda",
      info: "Good Bike",
      inCart: false,
      count: 1,
    },
  ],

  selectedData: null,
  editable: false,
};

/** ..........................Table Reducer........................... */

const tableReducer = (state = initState, { type, payload }) => {
  switch (type) {
    /**.........Adding Data to the Table */
    case ADD_DATA:
      const addNew = [...state.tableData, payload];

      return { ...state, tableData: addNew };

    /**.........Deleting a particular row */
    case DELETE_DATA:
      const filteredData = state.tableData.filter(data => data.id !== payload);
      return {
        ...state,
        tableData: filteredData,
      };

    /**.........Selecting a particular row */
    case SELECTED_DATA:
      return {
        ...state,
        selectedData: payload,
        editable: true,
      };

    /**.........Updating a particular row */
    case UPDATE_DATA:
      const updateData = state.tableData.map(data =>
        data.id === payload.id ? payload : data,
      );

      return {
        ...state,
        tableData: updateData,
        editable: false,
      };

    default:
      return state;
  }
};

export default tableReducer;
