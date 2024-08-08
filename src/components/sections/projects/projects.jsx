import React from 'react';
import styled from 'styled-components';
import { Div, Image, Link } from '../../../interface/styledComponents';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import Tooltip from '../../../interface/tooltip';

// UI COMPONENTS
const SProject = styled.div`
  --width: 100%;
  --max-width-laptop-lg: 44rem;
  --max-width-laptop: 40rem;
  --max-width-tablet: 36rem;
  --max-width-mobile: 28rem;
  --height: 100%;

  display: flex;
  width: var(--width);
  height: var(--height);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Name = styled.p`
  color: var(--clr-orange-400);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;

  span {
    color: var(--clr-stone-200);
    font-size: calc(var(--font-size-base) - 0.2rem);
  }

  @media screen and (max-width: 1024px) {
    font-size: calc(var(--font-size-base) - 0.1rem);

    span {
      font-size: calc(var(--font-size-base) - 0.3rem);
      letter-spacing: 0.05rem;
      word-spacing: 0.05rem;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: calc(var(--font-size-base) - 0.2rem);

    span {
      font-size: var(--font-size-sm);
    }
  }
`;

const Description = styled.p`
  color: var(--clr-stone-400);
  font-size: calc(var(--font-size-base) - 0.2rem);
  font-family: var(--font-fam-sans);
  line-height: 1.5;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;

  @media screen and (max-width: 1024px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
    letter-spacing: 0.05rem;
    word-spacing: 0.05rem;
  }

  @media screen and (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;

// UI DATA
const projects = [
  {
    id: 1,
    projectName: 'Moviepire',
    projectType: 'IMDb Clone',
    image: '/projectsImages/moviepire-bg.JPG',
    about: 'In work...',
    link: 'https://moviepire-journal.netlify.app',
    githubRepo: '/',
  },
  {
    id: 2,
    projectName: 'Dota 2 Trivia',
    projectType: 'Trivia App',
    image: '/projectsImages/dota2-trivia-bg.JPG',
    about:
      'Trivia app based on the game Dota 2 with questions based on game mechanics and heroes. Includes features like, score, timer, reset level.',
    link: 'https://dota-2-trivia.netlify.app',
    githubRepo: 'https://github.com/MariannDobre/dota2-trivia',
  },
  {
    id: 3,
    projectName: 'Dojo`s Spirit',
    projectType: 'Landing page',
    image: '/projectsImages/dojo-bg.JPG',
    about:
      'Landing page for a fictional company that want to help people to make desired cocktails at home. Includes features like filtering, age restriction.',
    link: 'https://dojos-spirit.netlify.app',
    githubRepo: 'https://github.com/MariannDobre/dojo-landing-page',
  },
];

function Projects() {
  return (
    <Div
      className='project-wrapper'
      $maxWidth='140rem'
      $direction='column'
      $gap='2rem'
      // $bgColor='blue'
    >
      {projects.map((project) => (
        <SProject key={project.id}>
          <Image
            className='project-image'
            $maxWidth='52rem'
            $height='28rem'
            $filter='grayscale(100%)'
            src={project.image}
            alt='App page'
          />

          <Div
            className='project-details-container'
            $direction='column'
            $justifyContent='space-between'
            $width='100%'
            $maxWidth='140rem'
            $height='28rem'
            $padX='2rem'
          >
            <Div
              className='project-details-header'
              $direction='column'
              $gap='2rem'
            >
              <Name>
                {project.projectName}&nbsp;-&nbsp;
                <span>{project.projectType}</span>
              </Name>

              <Description>{project.about}</Description>
            </Div>

            <Div
              style={{ alignSelf: 'flex-end' }}
              $gap='1.6rem'
            >
              <Tooltip text='View the github repo'>
                <Link
                  className='github-link'
                  href={project.githubRepo}
                  target='_blank'
                  rel='noopener noreferrer'
                  $textColor='var(--clr-stone-200)'
                  $fontSize='var(--font-size-md)'
                  $hoverTextColor='var(--clr-yellow-400)'
                  $focusTextColor='var(--clr-yellow-400)'
                >
                  <FiGithub />
                </Link>
              </Tooltip>

              <Tooltip text='Try the app'>
                <Link
                  className='project-link'
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  $textColor='var(--clr-stone-200)'
                  $fontSize='var(--font-size-md)'
                  $hoverTextColor='var(--clr-rose-400)'
                  $focusTextColor='var(--clr-rose-400)'
                >
                  <HiOutlineArrowTopRightOnSquare />
                </Link>
              </Tooltip>
            </Div>
          </Div>
        </SProject>
      ))}
    </Div>
  );
}

export default Projects;
