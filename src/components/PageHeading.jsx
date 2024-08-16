import React from 'react';
import HeaderCards from './HeaderCards';

function PageHeading() {
  return (
    <div
      id='what-i-know'
      className='bg-bgColorSecondary flex flex-col items-center gap-12 w-full rounded-md p-6 shadow-md outline outline-1 outline-bgColorContrast'
    >
      <h1 className='text-textColorMain text-8xl text-center font-black tracking-[0.2em]'>
        WHAT I'VE KNOW SO FAR
      </h1>

      <div className='flex'>
        <HeaderCards />
      </div>
    </div>
  );
}

export default PageHeading;
