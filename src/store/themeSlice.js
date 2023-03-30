import { createSlice } from '@reduxjs/toolkit';

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';
const initialTheme = localStorage.getItem('app-theme') || defaultTheme;
const initialButtonText = isDarkTheme ? 'Light Mode' : 'Dark Mode';

const themeSlice = createSlice({
   name: 'theme',
   initialState: {
      theme: initialTheme,
      buttonText: initialButtonText,
   },
   reducers: {
      setTheme(state, action) {
         state.theme = action.payload.theme;
      },
      setButtonText(state, action) {
         state.buttonText = action.payload.buttonText;
      },
   },
});

export const { setTheme, setButtonText } = themeSlice.actions;
export default themeSlice.reducer;
