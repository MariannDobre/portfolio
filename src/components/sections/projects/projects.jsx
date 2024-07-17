import React from 'react';

import { Section } from '../../../interface/styledComponents';
import ProjectsHeader from './projectsHeader';
import Project from './project';
import { useInView } from 'react-intersection-observer';

function Projects() {
  const { ref: projectRef, inView: isSectionInView } = useInView({
    threshold: 0.1,
  });

  return (
    <Section
      ref={projectRef}
      className={isSectionInView ? 'visible' : 'hidden'}
      $marginBottom='20rem'
    >
      <ProjectsHeader />

      <Project />
    </Section>
  );
}

export default Projects;
