import React, { useState } from 'react';
import styled from 'styled-components';
import ExperienceTabSelector from './experienceTabSelector';
import ExperienceTabContent from './experienceTabContent';

const StyledExperienceContent = styled.aside`
  --max-width: 140rem;

  --height-course: 40rem;
  --height-learning: 44rem;

  --height-course-laptop-lg: 40rem;
  --height-learning-laptop-lg: 44rem;

  --height-course-tablet: 52rem;
  --height-course-tablet-2: 56rem;
  --height-learning-tablet: 48rem;

  --height-course-mobile: 64rem;
  --height-learning-mobile: 52rem;

  display: flex;
  gap: 1.6rem;
  max-width: var(--max-width);
  background-color: var(--bg-clr-secondary);

  transition: height 0.35s ease;

  &.course-height {
    height: var(--height-course);
  }

  &.learning-height {
    height: var(--height-learning);
  }

  @media screen and (max-width: 1364px) {
    gap: 1.4rem;

    &.course-height {
      height: var(--height-course-laptop-lg);
    }

    &.learning-height {
      height: var(--height-learning-laptop-lg);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    gap: 1.2rem;
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    gap: 1rem;

    &.course-height {
      height: var(--height-course-tablet);
    }

    &.learning-height {
      height: var(--height-learning-tablet);
    }
  }

  @media screen and (max-width: 668px), screen and (max-height: 664px) {
    &.course-height {
      height: var(--height-course-tablet-2);
    }
  }

  @media screen and (max-width: 480px) {
    &.course-height {
      height: var(--height-course-mobile);
    }

    &.learning-height {
      height: var(--height-learning-mobile);
    }
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
