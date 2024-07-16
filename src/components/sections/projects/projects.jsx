import React from 'react';
import styled from 'styled-components';
import Tooltip from '../../../interface/tooltip';
import {
  Box,
  HeadingsContainer,
  Image,
  Link,
  Section,
  SectionHeading,
  SectionSubheading,
  Span,
} from '../../../interface/styledComponents';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

const projects = [
  {
    id: 1,
    projectName: 'Moviepire',
    projectType: 'IMDb Clone',
    image: '/projectsImages/moviepire-bg.JPG',
    about: 'In work...',
    link: 'https://www.youtube.com/watch?v=qR5KTWqgkM4&ab_channel=BogdanDLP',
    githubRepo:
      'https://www.youtube.com/watch?v=qR5KTWqgkM4&ab_channel=BogdanDLP',
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

//
const Project = styled.div`
  --width: 100%;
  --height: 100%;

  display: flex;
  gap: 1.6rem;
  width: var(--width);
  height: var(--height);
`;

const Name = styled.p`
  color: var(--clr-orange-400);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
`;

const Description = styled.p`
  color: var(--clr-stone-400);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  line-height: 1.5;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
`;

function Projects() {
  return (
    <Section $marginBottom='20rem'>
      <HeadingsContainer
        $direction='column'
        $gap='0.8rem'
      >
        <SectionHeading>Where the work pays off</SectionHeading>

        <SectionSubheading $textColor='var(--clr-orange-400)'>
          Projects
        </SectionSubheading>
      </HeadingsContainer>

      <Box
        $direction='column'
        $gap='4rem'
      >
        {projects.map((project) => (
          <Project key={project.id}>
            <Image
              $width='52rem'
              $height='28rem'
              $filter='grayscale(100%)'
              src={project.image}
              alt='App page'
            />

            <Box
              $direction='column'
              $justifyContent='space-between'
              $width='100%'
              $height='28rem'
              $padX='1.6rem'
            >
              <Box
                $direction='column'
                $gap='1.6rem'
              >
                <Name>
                  {project.projectName}&nbsp;-&nbsp;
                  <Span
                    $textColor='var(--clr-stone-200)'
                    $fontSize='1.4rem'
                  >
                    {project.projectType}
                  </Span>
                </Name>

                <Description>{project.about}</Description>
              </Box>

              <Box
                style={{ alignSelf: 'flex-end' }}
                $gap='1.6rem'
              >
                <Tooltip text='View the github repo'>
                  <Link
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
              </Box>
            </Box>
          </Project>
        ))}
      </Box>
    </Section>
  );
}

export default Projects;
