import React from 'react';
import {
  HeadingsContainer,
  SectionHeading,
  SectionSubheading,
} from '../../interface/styledComponents';

function HeaderTitles() {
  return (
    <HeadingsContainer
      style={{ marginTop: '2.4rem' }}
      $direction='column'
      $gap='0.8rem'
    >
      <SectionHeading>Let's start from here</SectionHeading>

      <SectionSubheading $textColor='var(--clr-violet-400)'>
        About Me
      </SectionSubheading>
    </HeadingsContainer>
  );
}

export default HeaderTitles;
