import React from 'react';
import CountriesCardList from '../CountriesCarsList/CountriesCardList';
import FullScreenCountry from '../FullScreenCountry/FullScreenCountry';
import Filter from '../Filter/Filter';

const Main = () => {
   return (
      <main className="main">
         <Filter
            options={[
               { value: 'Africa', name: 'Africa' },
               { value: 'Americas', name: 'America' },
               { value: 'Asia', name: 'Asia' },
               { value: 'Europe', name: 'Europe' },
               { value: 'Oceania', name: 'Oceania' },
            ]}
         />
         <CountriesCardList />
         <FullScreenCountry />
      </main>
   );
};

export default Main;
