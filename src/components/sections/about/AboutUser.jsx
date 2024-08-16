import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function AboutUser() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='max-w-[36rem]'>
      <p className='text-lg text-textColorMain leading-8 tracking-wider'>
        I'm Marian,&nbsp;a&nbsp;
        <strong
          className={theme === 'light' ? 'text-blue-400' : 'text-blue-500'}
        >
          web&nbsp;developer
        </strong>
        &nbsp;based in&nbsp;
        <strong
          className={theme === 'light' ? 'text-blue-400' : 'text-blue-500'}
        >
          Bucharest, Romania
        </strong>
        &nbsp;|&nbsp;specializing&nbsp;in&nbsp;
        <strong
          className={theme === 'light' ? 'text-blue-400' : 'text-blue-500'}
        >
          Frontend Development
        </strong>
        , focusing on building high quality and complex user interfaces
        through&nbsp;
        <strong
          className={theme === 'light' ? 'text-blue-400' : 'text-blue-500'}
        >
          React
        </strong>
        &nbsp;and becoming a better person and developer each day.
      </p>
    </div>
  );
}

export default AboutUser;
