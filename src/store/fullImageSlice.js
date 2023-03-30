import { createSlice } from '@reduxjs/toolkit';

const fullImageSlice = createSlice({
   name: 'fullScreenPage',
   initialState: {
      fullScreenPage: false,
      actualCountry: {},
   },
   reducers: {
      openFullScreenPage(state, action) {
         state.fullScreenPage = action.payload.visibility;
         state.actualCountry = action.payload.actualCountry;
      },
      closeFullScreenPage(state, action) {
         state.fullScreenPage = action.payload.visibility;
      },
   },
});

export const { openFullScreenPage, closeFullScreenPage } =
   fullImageSlice.actions;
export default fullImageSlice.reducer;
