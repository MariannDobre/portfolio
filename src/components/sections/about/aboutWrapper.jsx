import React from 'react';
import { Section } from '../../../interface/styledComponents';
import About from './about';
import SectionHeadings from '../../../interface/sectionHeadings';
import SectionContent from '../../../interface/sectionContent';

function AboutWrapper({ measureRef, intersectionRef, inView }) {
  return (
    <Section
      ref={(element) => {
        measureRef.current = element;
        intersectionRef(element);
      }}
      className={inView ? 'section-visible' : 'section-hidden'}
      $width='100%'
      $maxWidth='100%'
    >
      <SectionHeadings
        title="Let's start from here"
        subtitle='About me'
        subtitleTextColor='var(--clr-violet-400)'
      />

      <SectionContent componentToRender={<About />} />
    </Section>
  );
}

export default AboutWrapper;
