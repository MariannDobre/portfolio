import React from 'react';

import { Section } from '../../../interface/styledComponents';
import ProjectsHeader from './projectsHeader';
import Project from './project';

function Projects() {
  return (
    <Section $marginBottom='20rem'>
      <ProjectsHeader />

      <Project />
    </Section>
  );
}

export default Projects;
