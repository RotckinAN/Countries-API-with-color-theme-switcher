import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
   closeFullScreenPage,
   openFullScreenPage,
} from '../../store/fullImageSlice';
import {
   getBorderCountries,
   setBorderCountries,
} from '../../store/initialCountriesSlice';
let _ = require('lodash');

const FullScreenCountry = () => {
   const theme = useSelector((state) => state.theme.theme);
   const dispatch = useDispatch();
   const isOpen = useSelector((state) => state.fullScreenPage.fullScreenPage);
   const fullScreenCountryClassName = `fullScreenCountry ${
      isOpen ? 'fullScreenCountry_active' : ''
   }`;
   const actualCountry = useSelector(
      (state) => state.fullScreenPage.actualCountry
   );
   const borderCountries = useSelector(
      (state) => state.initialCountries.borderCountries
   );
   const peoplePopulation = (numbersOfPeople) => {
      return String(numbersOfPeople).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   };
   const buttonClassName = `fullScreenCountry__buttonLogo ${
      theme === 'dark' ? 'fullScreenCountry__buttonLogo_type_dark' : ''
   }`;

   if (!_.isEmpty(actualCountry)) {
      const {
         flags,
         name,
         population,
         region,
         subregion,
         capital,
         tld,
         currencies,
         languages,
      } = actualCountry;
      const nativeName = () => {
         const names = [];
         if (name.nativeName) {
            for (const [key, value] of Object.entries(name.nativeName)) {
               names.push(value.official);
            }
            return names.join(' / ');
         } else {
            return 'No Native Name';
         }
      };
      const currenciesName = () => {
         if (currencies) {
            for (const [key, value] of Object.entries(currencies)) {
               return value.name;
            }
         } else {
            return 'No Currencies';
         }
      };

      const languagesName = () => {
         const names = [];
         if (languages) {
            for (const [key, value] of Object.entries(languages)) {
               names.push(value);
            }
            return names.join(', ');
         } else {
            return 'No Languages';
         }
      };

      return (
         <section className={fullScreenCountryClassName}>
            <button
               className="fullScreenCountry__button"
               onClick={() => {
                  dispatch(closeFullScreenPage({ visibility: false }));
                  dispatch(setBorderCountries());
               }}
            >
               <IoArrowBack className={buttonClassName} />
               Back
            </button>
            <div className="fullScreenCountry__container">
               <img
                  src={flags.png}
                  alt={flags.alt ? flags.alt : `flag of ${name.common}`}
                  className="fullScreenCountry__fullImage"
               />
               <div className="fullScreenCountry__textContainer">
                  <h2 className="fullScreenCountry__title">{name.common}</h2>
                  <div className="fullScreenCountry__paragraphContainer">
                     <div className="fullScreenCountry__halfSizeContainer">
                        <p className="fullScreenCountry__paragraph">
                           <span>Native Name: </span>
                           {nativeName()}
                        </p>
                        <p className="fullScreenCountry__paragraph">
                           <span>Population: </span>
                           {peoplePopulation(population)}
                        </p>
                        <p className="fullScreenCountry__paragraph">
                           <span>Region: </span>
                           {region}
                        </p>
                        <p className="fullScreenCountry__paragraph">
                           <span>Sub Region: </span>
                           {subregion}
                        </p>
                        <p className="fullScreenCountry__paragraph">
                           <span>Capital: </span>
                           {capital}
                        </p>
                     </div>
                     <div className="fullScreenCountry__halfSizeContainer">
                        <p className="fullScreenCountry__paragraph">
                           <span>Top Level Domain: </span>
                           {tld ? tld.join(', ') : ''}
                        </p>
                        <p className="fullScreenCountry__paragraph">
                           <span>Currencies: </span>
                           {currenciesName()}
                        </p>
                        <p className="fullScreenCountry__paragraph">
                           <span>Languages: </span>
                           {languagesName()}
                        </p>
                     </div>
                  </div>
                  <div className="fullScreenCountry__linkContainer">
                     <p className="fullScreenCountry__paragraph">
                        <span>Border Countries: </span>
                     </p>
                     <ul className="fullScreenCountry__linkList">
                        {borderCountries.map((country, index) => (
                           <li
                              className="fullScreenCountry__linkItem"
                              key={index}
                              onClick={() => {
                                 if (country.name) {
                                    dispatch(
                                       openFullScreenPage({
                                          visibility: true,
                                          actualCountry: country,
                                       })
                                    );
                                    dispatch(
                                       getBorderCountries({
                                          actualCountry: country,
                                       })
                                    );
                                 }
                              }}
                           >
                              {country.name !== undefined
                                 ? country.name.common
                                 : country}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
};

export default FullScreenCountry;
