import React from 'react';
import { Section } from '../../../interface/styledComponents';
import ExperienceHeader from './experienceHeader';
import ExperienceContent from './experienceContainer';

function Experience() {
  return (
    <Section $marginBottom='20rem'>
      <ExperienceHeader />

      <ExperienceContent />
    </Section>
  );
}

export default Experience;
