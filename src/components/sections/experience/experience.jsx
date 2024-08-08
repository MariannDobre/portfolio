import React, { useState } from 'react';
import styled from 'styled-components';
import ExperienceTabSelector from './experienceTabSelector';
import ExperienceTabContent from './experienceTabContent';

const StyledExperienceContent = styled.aside`
  --max-width: 140rem;

  display: flex;
  gap: 1.6rem;
  max-width: var(--max-width);

  transition: height 0.35s ease;

  &.course-height {
    height: auto;
  }

  &.learning-height {
    height: auto;
  }

  @media screen and (max-width: 1364px) {
    gap: 1.4rem;
  }

  @media screen and (max-width: 1024px) {
    gap: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

function Experience({ sectionIndex, setSectionIndex }) {
  return (
    <StyledExperienceContent
      className={sectionIndex === 0 ? 'course-height' : 'learning-height'}
    >
      <ExperienceTabSelector
        sectionIndex={sectionIndex}
        setSectionIndex={setSectionIndex}
      />

      <ExperienceTabContent sectionIndex={sectionIndex} />
    </StyledExperienceContent>
  );
}

export default Experience;
