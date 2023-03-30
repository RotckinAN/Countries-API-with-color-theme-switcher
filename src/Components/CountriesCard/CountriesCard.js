import React from 'react';
import { useDispatch } from 'react-redux';
import { openFullScreenPage } from '../../store/fullImageSlice';
import { getBorderCountries } from '../../store/initialCountriesSlice';

const CountriesCard = ({
   country,
   name,
   flags,
   population,
   region,
   capital,
}) => {
   const dispatch = useDispatch();
   const peoplePopulation = (numbersOfPeople) => {
      return String(numbersOfPeople).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   };

   return (
      <li
         className="card"
         onClick={() => {
            dispatch(
               openFullScreenPage({ visibility: true, actualCountry: country })
            );
            dispatch(getBorderCountries({ actualCountry: country }));
         }}
      >
         <img
            className="card__image"
            src={flags.png}
            alt={flags.alt ? flags.alt : `flag of ${name.common}`}
         />
         <div className="card__textContainer">
            <h2 className="card__title">{name.common}</h2>
            <p className="card__textContent">
               <span>Population: </span>
               {peoplePopulation(population)}
            </p>
            <p className="card__textContent">
               <span>Region: </span>
               {region}
            </p>
            <p className="card__textContent">
               <span>Capital: </span>
               {capital}
            </p>
         </div>
      </li>
   );
};

export default CountriesCard;
