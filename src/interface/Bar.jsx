import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from '../context/ThemeContext';

function Bar({ barColorLight, barColorDark, height }) {
  const { theme } = useContext(ThemeContext);
  const { ref: barRef, inView: isBarInView } = useInView();

  return (
    <div
      ref={barRef}
      className={`${theme === 'light' ? barColorLight : barColorDark} ${
        isBarInView ? 'bar-visible' : 'bar-hidden'
      } w-1 ${height} rounded-lg ml-8`}
    />
  );
}

export default Bar;
