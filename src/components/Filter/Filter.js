import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputSort, getSelectSort } from '../../store/initialCountriesSlice';
import { IoSearch, IoSearchSharp } from 'react-icons/io5';

const Filter = ({ options }) => {
   const theme = useSelector((state) => state.theme.theme);
   const isOpen = useSelector((state) => state.fullScreenPage.fullScreenPage);
   const buttonLightClassName = `filter__glassSearch ${
      theme === 'dark' ? '' : 'filter__glassSearch_type_light'
   }`;
   const buttonDarkClassName = `filter__glassSearch ${
      theme === 'dark' ? 'filter__glassSearch_type_dark' : ''
   }`;
   const countriesCardListClassName = `filter ${
      isOpen ? 'filter_inactive' : ''
   }`;
   const dispatch = useDispatch();

   return (
      <section className={countriesCardListClassName}>
         <IoSearch className={buttonLightClassName} />
         <IoSearchSharp className={buttonDarkClassName} />
         <input
            type="text"
            className="filter__input"
            placeholder="Search for a country..."
            onChange={(evt) =>
               dispatch(getInputSort({ inputValue: evt.target.value }))
            }
         />
         <select
            aria-label="sortingCountriesByContinent"
            id="countrySorting"
            className="filter__select"
            onChange={(evt) =>
               dispatch(getSelectSort({ selectValue: evt.target.value }))
            }
         >
            <option value="" className="filter__option">
               Filtered by Region
            </option>
            {options.map((option) => (
               <option
                  className="filter__option"
                  key={option.value}
                  value={option.value}
               >
                  {option.name}
               </option>
            ))}
         </select>
      </section>
   );
};

export default Filter;
