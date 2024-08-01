import React from 'react';
import { Section } from '../../../interface/styledComponents';
import Projects from './projects';
import SectionHeadings from '../../../interface/sectionHeadings';
import SectionContent from '../../../interface/sectionContent';

function ProjectsWrapper({ measureRef, intersectionRef, inView }) {
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
        title='Where the work pays off'
        subtitle='Projects'
        subtitleTextColor='var(--clr-orange-400)'
      />

      <SectionContent componentToRender={<Projects />} />
    </Section>
  );
}

export default ProjectsWrapper;
