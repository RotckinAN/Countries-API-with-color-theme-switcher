import { configureStore } from '@reduxjs/toolkit';
import fullScreenReducer from './fullImageSlice';
import initialCountries from './initialCountriesSlice';
import theme from './themeSlice';

export default configureStore({
   reducer: {
      theme: theme,
      fullScreenPage: fullScreenReducer,
      initialCountries: initialCountries,
   },
});
