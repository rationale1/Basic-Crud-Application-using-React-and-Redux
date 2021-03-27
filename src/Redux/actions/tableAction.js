/** ..........................Contants........................... */
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const SELECTED_DATA = "SELECTED_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

/** ..........................Table Actions........................... */
export const addData = data => ({
  type: ADD_DATA,
  payload: data,
});

export const deleteData = id => ({
  type: DELETE_DATA,
  payload: id,
});

export const selectedData = data => ({
  type: SELECTED_DATA,
  payload: data,
});

export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data,
});
