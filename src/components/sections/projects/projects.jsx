import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <div className='grid grid-cols-3 gap-x-6 p-3 bg-bgColorSecondary outline outline-1 outline-bgColorContrast rounded-md shadow-xl'>
      <Project />
    </div>
  );
}

export default Projects;
