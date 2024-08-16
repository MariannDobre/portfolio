import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

// UI DATA
const projects = [
  {
    id: 1,
    projectName: 'Moviepire',
    projectType: 'IMDb Clone',
    image: '/projectsImages/moviepire-bg.JPG',
    about: 'In work...',
    appLink: 'https://moviepire-journal.netlify.app',
    githubRepo: '/',
  },
  {
    id: 2,
    projectName: 'Dota 2 Trivia',
    projectType: 'Trivia App',
    image: '/projectsImages/dota2-trivia-bg.JPG',
    about:
      'Trivia app based on the game Dota 2 with questions based on game mechanics and heroes. Includes features like, score, timer, reset level.',
    appLink: 'https://dota-2-trivia.netlify.app',
    githubRepo: 'https://github.com/MariannDobre/dota2-trivia',
  },
  {
    id: 3,
    projectName: 'Dojo`s Spirit',
    projectType: 'Landing page',
    image: '/projectsImages/dojo-bg.JPG',
    about:
      'Landing page for a fictional company that want to help people to make desired cocktails at home. Includes features like filtering, age restriction, lazy loading.',
    appLink: 'https://dojos-spirit.netlify.app',
    githubRepo: 'https://github.com/MariannDobre/dojo-landing-page',
  },
];

function Project() {
  return projects.map(
    ({ id, projectName, projectType, image, about, appLink, githubRepo }) => (
      <div
        className='flex flex-col items-center bg-bgColorMain rounded-md shadow-xl outline outline-1 outline-bgColorContrast'
        key={id}
      >
        <img
          className='w-full h-72 rounded-md shadow-lg grayscale'
          src={image}
          alt='Project short pic.'
        />

        <div className='flex flex-col items-center gap-6 w-full p-3 h-72'>
          <div className='flex flex-col self-start gap-1'>
            <h1 className='text-blue-500'>{projectName}</h1>

            <p className='text-blue-400'>{projectType}</p>
          </div>

          <p className='text-sm text-stone-200 tracking-wide leading-6'>
            {about}
          </p>

          <div className='text-stone-200 text-xl flex items-center gap-3 self-end mt-auto'>
            <a
              className='hover:text-blue-500 focus-visible:text-blue-500 transition-all duration-300'
              href={githubRepo}
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>

            <a
              className='hover:text-blue-500 focus-visible:text-blue-500 transition-all duration-300'
              href={appLink}
              rel='noopener noreferrer'
            >
              <HiOutlineArrowTopRightOnSquare />
            </a>
          </div>
        </div>
      </div>
    )
  );
}

export default Project;
