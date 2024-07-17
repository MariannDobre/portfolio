import React from 'react';
import { Section } from '../../../interface/styledComponents';
import ExperienceHeader from './experienceHeader';
import ExperienceContent from './experienceContainer';
import { useInView } from 'react-intersection-observer';

function Experience() {
  const { ref: experienceRef, inView: isSectionInView } = useInView({
    threshold: 0.1,
  });

  return (
    <Section
      ref={experienceRef}
      className={isSectionInView ? 'visible' : 'hidden'}
      $marginBottom='20rem'
    >
      <ExperienceHeader />

      <ExperienceContent />
    </Section>
  );
}

export default Experience;
