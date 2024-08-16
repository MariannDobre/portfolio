import React from 'react';

function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(/projectsImages/portfolio-bg.jpg)',
      }}
      className='w-full h-[840px] bg-cover bg-center bg-no-repeat flex items-center justify-center shadow-xl outline outline-1 outline-bgColorContrast'
    >
      <h1 className='text-8xl text-textColorMain text-center font-black uppercase tracking-[0.2em]'>
        Self Taught Web Developer
      </h1>
    </div>
  );
}

export default Hero;
