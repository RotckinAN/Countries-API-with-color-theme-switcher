import React from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setButtonText, setTheme } from '../../store/themeSlice';

const Header = () => {
   const theme = useSelector((state) => state.theme.theme);
   const buttonText = useSelector((state) => state.theme.buttonText);
   const dispatch = useDispatch();
   const buttonLightClassName = `header__buttonLogo ${
      theme === 'dark' ? '' : 'header__buttonLogo_type_dark'
   }`;
   const buttonDarkClassName = `header__buttonLogo ${
      theme === 'dark' ? 'header__buttonLogo_type_light' : ''
   }`;

   const handleThemeClick = () => {
      if (theme === 'light') {
         dispatch(setTheme({ theme: 'dark' }));
         dispatch(setButtonText({ buttonText: 'Light Mode' }));
      } else {
         dispatch(setTheme({ theme: 'light' }));
         dispatch(setButtonText({ buttonText: 'Dark Mode' }));
      }
   };

   return (
      <header className="header">
         <div className="header__container">
            <h1 className="header__title">Where in the world?</h1>
            <button
               className="header__themeToggleButton"
               onClick={handleThemeClick}
            >
               <IoMoonOutline className={buttonLightClassName} />
               <IoMoon className={buttonDarkClassName} />
               {buttonText}
            </button>
         </div>
      </header>
   );
};

export default Header;
