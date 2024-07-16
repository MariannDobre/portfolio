import React from 'react';
import {
  HeadingsContainer,
  SectionHeading,
  SectionSubheading,
} from '../../../interface/styledComponents';

function ProjectsHeader() {
  return (
    <HeadingsContainer
      $direction='column'
      $gap='0.8rem'
    >
      <SectionHeading>Where the work pays off</SectionHeading>

      <SectionSubheading $textColor='var(--clr-orange-400)'>
        Projects
      </SectionSubheading>
    </HeadingsContainer>
  );
}

export default ProjectsHeader;
