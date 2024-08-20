import React from 'react';
import HeaderCards from './HeaderCards';

// css styles for responsive layout
const responsiveStyles = 'text-3xl sm:text-4xl 2xl:text-8xl';

function PageHeading() {
  return (
    <div
      id='what-i-know'
      className='bg-bgColorSecondary flex flex-col items-center gap-12 w-full rounded-md p-6 shadow-md outline outline-1 outline-bgColorContrast'
    >
      <h1
        className={`text-textColorMain text-center font-black tracking-[0.2em] ${responsiveStyles}`}
      >
        WHAT I'VE KNOW SO FAR
      </h1>

      <div className='flex'>
        <HeaderCards />
      </div>
    </div>
  );
}

export default PageHeading;
