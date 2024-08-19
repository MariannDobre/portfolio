import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right bottom, ${
          theme === 'light' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 1)'
        }, ${
          theme === 'light' ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.5)'
        }), url(/projectsImages/portfolio-bg.jpg)`,
      }}
      className='w-full h-[840px] bg-cover bg-center bg-no-repeat flex items-center justify-center shadow-2xl outline outline-1 outline-bgColorContrast'
    >
      <h1 className='text-8xl text-textColorMain text-center font-black uppercase tracking-[0.2em]'>
        Self Taught Web Developer
      </h1>
    </div>
  );
}

export default Hero;