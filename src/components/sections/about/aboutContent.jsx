import React from 'react';
import Features from './features';
import Data from './data';
import { Div } from '../../../interface/styledComponents';

function AboutContent() {
  return (
    <Div $height='100%'>
      <Div
        className='about-content'
        $gap='2rem'
        $width='100%'
        $height='100%'
      >
        <Features />

        <Data />
      </Div>
    </Div>
  );
}

export default AboutContent;
