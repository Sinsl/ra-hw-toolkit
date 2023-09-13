import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueInput: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      state.valueInput = action.payload
    }
  }
})

export const { changeInput } = searchSlice.actions;
export default searchSlice.reducer;