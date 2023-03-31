import React from 'react';
import CountriesCard from '../CountriesCard/CountriesCard';
import { useSelector } from 'react-redux';

const CountriesCardList = () => {
   const isOpen = useSelector((state) => state.fullScreenPage.fullScreenPage);
   const countriesCardListClassName = `countriesCardList ${
      isOpen ? 'countriesCardList_inactive' : ''
   }`;

   const sortedCountries = useSelector(
      (state) => state.initialCountries.sortedCountries
   );

   return (
      <section className={countriesCardListClassName}>
         <ul className="countriesCardList__list">
            {sortedCountries.map((country) => {
               const { _id, name, flags, population, region, capital } =
                  country;
               return (
                  <CountriesCard
                     key={_id}
                     country={country}
                     name={name}
                     region={region}
                     flags={flags}
                     capital={capital}
                     population={population}
                  />
               );
            })}
         </ul>
      </section>
   );
};

export default CountriesCardList;
