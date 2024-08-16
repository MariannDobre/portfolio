import React, { useContext } from 'react';
import { scroller } from 'react-scroll';
import { ThemeContext } from '../../../context/ThemeContext';
import UserImage from './UserImage';
import AboutUser from './AboutUser';
import { FaArrowDown } from 'react-icons/fa';

// handler to scroll to a certain section
const scrollToSection = (sectionId) => {
  scroller.scrollTo(sectionId, {
    duration: 1500,
    delay: 0,
    smooth: 'easeInOutQuad',
  });
};

function PageAbout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id='about'
      className='relative w-full min-h-full bg-bgColorSecondary flex items-center justify-evenly p-3 rounded-md shadow-xl outline outline-1 outline-bgColorContrast'
    >
      <UserImage />

      <AboutUser />

      <button
        className={`absolute left-3 bottom-3 bg-bgColorMain text-textColorMain text-lg p-3 rounded-full shadow-xl outline-0 transition-all duration-300 ${
          theme === 'light' ? 'hover:text-bgColorMain' : 'hover:text-blue-500'
        } hover:bg-bgColorMainDark`}
        onClick={() => scrollToSection('what-i-know')}
      >
        <FaArrowDown />
      </button>
    </div>
  );
}

export default PageAbout;
