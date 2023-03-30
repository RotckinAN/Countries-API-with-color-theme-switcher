import axios from 'axios';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialCountries } from '../../store/initialCountriesSlice';

function App() {
   const dispatch = useDispatch();
   const theme = useSelector((state) => state.theme.theme);

   useLayoutEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('app-theme', theme);
   }, [theme]);

   const getCountries = async () => {
      try {
         const initialCountriesByRequest = await axios.get(
            'https://restcountries.com/v3.1/all'
         );

         if (initialCountriesByRequest.statusText === 'OK') {
            dispatch(getInitialCountries(initialCountriesByRequest.data));
         } else {
            console.error(
               `Error, status: ${initialCountriesByRequest.status}, statusText: ${initialCountriesByRequest.statusText}`
            );
         }
      } catch (err) {
         throw new Error('Invalid data');
      }
   };

   useEffect(() => {
      getCountries().catch((err) => console.error(err));
   }, []);

   return (
      <div className="page">
         <Header />
         <Main />
      </div>
   );
}

export default App;
