import { createSlice, current } from '@reduxjs/toolkit';
let _ = require('lodash');

const inputFilterRules = (country, state) => {
   return (
      country.name.common
         .toLowerCase()
         .includes(state.inputValue.toLowerCase()) ||
      country.region.toLowerCase().includes(state.inputValue.toLowerCase()) ||
      country.continents[0]
         .toLowerCase()
         .includes(state.inputValue.toLowerCase()) ||
      country.capital[0].toLowerCase().includes(state.inputValue.toLowerCase())
   );
};

const filterRules = (state) => {
   //! Если пустой инпут и нет выбора из списка
   if (!state.selectValue && !state.inputValue) {
      state.sortedCountries = state.initialCountries;
      //! Если что-то ввели в инпут, но нет выбора из списка
   } else if (!state.selectValue && state.inputValue) {
      state.sortedCountries = state.initialCountries.filter((country) => {
         if (inputFilterRules(country, state)) {
            return country;
         }
      });
      //! Если пустой инпут, но выбрали из списка
   } else if (state.selectValue && !state.inputValue) {
      state.sortedCountries = state.initialCountries.filter((country) => {
         if (country.region.toLowerCase() === state.selectValue.toLowerCase()) {
            return country;
         }
      });
      //! Если что-то ввели в инпут и выбрали из списка
   } else if (state.selectValue && state.inputValue) {
      state.sortedCountries = state.initialCountries
         .filter((country) => {
            if (
               country.region.toLowerCase() === state.selectValue.toLowerCase()
            ) {
               return country;
            }
         })
         .filter((country) => {
            if (inputFilterRules(country, state)) {
               return country;
            }
         });
   }
};

const initialCountriesSlice = createSlice({
   name: 'initialCountries',
   initialState: {
      initialCountries: [],
      sortedCountries: [],
      borderCountries: [],
      selectedValue: '',
      inputValue: '',
   },
   reducers: {
      getInitialCountries(state, action) {
         state.initialCountries = action.payload.map((item, index) => {
            if (!item.capital) {
               item.capital = ['No capital'];
            }
            item._id = index;
            return item;
         });
         state.sortedCountries = state.initialCountries;
      },
      getSelectSort(state, action) {
         state.selectValue = action.payload.selectValue;
         filterRules(state);
      },
      getInputSort(state, action) {
         state.inputValue = action.payload.inputValue;
         filterRules(state);
      },
      getBorderCountries(state, action) {
         if (!_.isEmpty(action.payload.actualCountry.borders)) {
            state.borderCountries = action.payload.actualCountry.borders.map(
               (country) => {
                  return current(state.initialCountries).filter(
                     (initialCountry) => {
                        if (initialCountry.cca3 === country) {
                           return initialCountry;
                        }
                     }
                  )[0];
               }
            );
         } else {
            state.borderCountries = ['No Border Countries'];
         }
      },
      setBorderCountries(state, action) {
         state.borderCountries = [];
      },
   },
});

export const {
   getInitialCountries,
   getSelectSort,
   getInputSort,
   getBorderCountries,
   setBorderCountries,
} = initialCountriesSlice.actions;
export default initialCountriesSlice.reducer;
