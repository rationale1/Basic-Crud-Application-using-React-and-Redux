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

const tableReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default tableReducer;
