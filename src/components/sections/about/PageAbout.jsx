import React from 'react';
import { scroller } from 'react-scroll';
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
  return (
    <div
      id='about'
      className='relative w-full min-h-full bg-bgColorSecondary flex flex-col items-center gap-16 p-16 rounded-md shadow-xl outline outline-1 outline-bgColorContrast xl:flex-row xl:gap-0 xl:justify-evenly xl:p-3'
    >
      <UserImage />

      <AboutUser />

      <button
        className='absolute left-3 bottom-3 text-textColorMain text-lg p-3 rounded-full shadow-xl outline outline-1 outline-bgColorContrast border-none hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300'
        onClick={() => scrollToSection('what-i-know')}
      >
        <FaArrowDown />
      </button>
    </div>
  );
}

export default PageAbout;
