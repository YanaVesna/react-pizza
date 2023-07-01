import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryID: 0,
  sort: {
    name: "beliebtheit",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryID, setSort } = filterSlice.actions;

export default filterSlice.reducer;
