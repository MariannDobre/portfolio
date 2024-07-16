import React from 'react';
import {
  HeadingsContainer,
  SectionHeading,
  SectionSubheading,
} from '../../../interface/styledComponents';

function ExperienceHeader() {
  return (
    <HeadingsContainer
      $direction='column'
      $gap='0.8rem'
    >
      <SectionHeading>A journey of self - discovery</SectionHeading>

      <SectionSubheading $textColor='var(--clr-emerald-600)'>
        Experience
      </SectionSubheading>
    </HeadingsContainer>
  );
}

export default ExperienceHeader;
