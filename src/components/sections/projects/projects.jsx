import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <div
      id='my-projects'
      className='flex flex-col gap-3 p-3 bg-bgColorSecondary outline outline-1 outline-bgColorContrast rounded-md shadow-xl xs:gap-6 xs:p-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:h-[600px] xl:h-auto'
    >
      <Project />
    </div>
  );
}

export default Projects;
