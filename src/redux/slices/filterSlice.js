import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryID: 0,
  sort: { name: "популярности", sortProperty: "rating" },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  redusers: {
    setCategotyId(state, action) {
      console.log("action setCategoryID", action);
      state.categoryID = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
