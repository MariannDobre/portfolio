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
          className='w-full h-44 rounded-md shadow-lg grayscale xs:h-64 sm:h-72 md:h-80 lg:h-52 xl:h-72'
          src={image}
          alt='Project short pic.'
        />

        <div className='flex flex-col items-center gap-6 w-full p-3 h-full'>
          <div className='flex flex-col self-start gap-1'>
            <h1 className='text-sm text-textColorMainHover xs:text-base md:text-lg'>
              {projectName}
            </h1>

            <p className='text-xs text-textColorSecondary xs:text-sm md:text-base'>
              {projectType}
            </p>
          </div>

          <p className='text-xs text-textColorMain tracking-wider leading-6 xs:test-sm md:text-base'>
            {about}
          </p>

          <div className='text-textColorMain text-sm flex items-center gap-3 self-end mt-auto xs:text-base sm:text-lg md:text-lg'>
            <a
              className='outline-none hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300'
              href={githubRepo}
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>

            <a
              className='outline-none hover:text-textColorMainHover focus-visible:text-textColorMainHover transition-all duration-300'
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
