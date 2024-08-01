import React from 'react';
import { Div, Link, Span } from '../../../interface/styledComponents';
import styled from 'styled-components';
import Tooltip from '../../../interface/tooltip';

// UI COMPONENTS
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  font-family: var(--font-fam-sans);
  padding: 1.6rem 1.6rem 3.2rem 0;

  @media screen and (max-width: 1364px) {
    gap: 1.4rem;
    padding: 1.4rem 1.4rem 2.8rem 0;
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    gap: 1.2rem;
    padding: 1.2rem 1.2rem 2.4rem 0;
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    gap: 1rem;
    padding: 1rem 1rem 2rem 0;
  }

  @media screen and (max-width: 480px) {
    padding: 0.8rem 0.8rem 1.6rem 0;
  }
`;

const TabTitle = styled.h2`
  color: var(--clr-emerald-600);
  font-size: var(--font-size-base);
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;

  @media screen and (max-width: 1364px) {
    font-size: calc(var(--font-size-base) - 0.1rem);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: calc(var(--font-size-base) - 0.2rem);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
  }

  @media screen and (max-width: 480px) {
  }
`;

const TabSubtitle = styled.p`
  color: var(--clr-stone-200);
  font-size: calc(var(--font-size-base) - 0.2rem);
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: var(--font-size-sm);
  }
`;

const Description = styled.p`
  color: var(--clr-stone-200);
  font-size: calc(var(--font-size-base) - 0.2rem);
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    &.hidden {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
  }
`;

const List = styled.ul`
  --padding: 0 0 0 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: var(--padding);
`;

const ListItem = styled.li`
  color: var(--clr-stone-200);
  font-size: calc(var(--font-size-base) - 0.3rem);
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;

  &::marker {
    color: var(--clr-emerald-400);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-sm);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
  }
`;

const Platform = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--clr-emerald-400);
  font-size: calc(var(--font-size-base) - 0.2rem);
  letter-spacing: 0.1rem;

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: var(--font-size-sm);
  }
`;

// UI DATA
const sectionsContent = [
  {
    id: 1,
    value: 'course',
    title: 'Course that i`ve followed',
    content: [
      {
        subtitle:
          'The Ultimate React Course 2024: React, Next.js, Redux & More',
        platform: 'Udemy',
        description:
          'This course provided an in-depth understanding of React, including common hooks, routing for SPAs, state management, etc.',
        skills: [
          'Building dynamic user interfaces',
          'Building reusable components',
          'Rendering dynamic classes and components',
          'Routing and navigation with React Router',
          'Implementing side effects',
          'State management with Context API',
          'State management with React Query (TanStack Query)',
        ],
        certificate:
          'https://www.udemy.com/certificate/UC-06ab86a2-5b3f-4d2a-beb0-c2eaaed813e2/',
      },
    ],
  },
  {
    id: 2,
    value: 'learning',
    title: 'Independent study',
    content: [
      {
        subtitle:
          'Engaged in self-directed learning using various online resources to build a solid foundation in web development.',
        resources: [
          'YouTube',
          'Udemy',
          'FreeCodeCamp',
          'Mozilla Developer Network (MDN)',
          'Stack Overflow',
        ],
        topicsCovered: [
          'HTML5 & CSS3',
          'JavaScript ES6',
          'React Ecosystem',
          'API Calls',
          'Form Handling',
          'Responsive Web Design',
          'Animations',
        ],
      },
    ],
  },
];

const title = sectionsContent.map((content) => content?.title);
const subtitle = sectionsContent.map(
  (content) => content?.content[0]?.subtitle
);

function ExperienceTabContent({ sectionIndex }) {
  return (
    <Wrapper>
      <TabTitle>{title[sectionIndex]}</TabTitle>

      {/* Subtitle of each section */}
      <TabSubtitle>
        {subtitle[sectionIndex] ? subtitle[sectionIndex] : null}
      </TabSubtitle>

      {/* !ONLY FOR COURSE SECTION */}
      {sectionIndex === 0 ? (
        <Platform>
          Platform:
          <Span
            className='exp-tab-content-span'
            $fontSize='calc(var(--font-size-base) - 0.2rem)'
            $ltrSpacing='0.1rem'
          >
            {sectionsContent[0]?.content[0]?.platform}
          </Span>
        </Platform>
      ) : null}

      {/* !ONLY FOR COURSE SECTION */}
      {sectionIndex === 0 ? (
        <Description className='hidden'>
          {sectionsContent[0]?.content[0]?.description}
        </Description>
      ) : null}

      {/* !ONLY FOR LEARNING SECTION */}
      {sectionIndex === 1 ? (
        <Div
          $direction='column'
          $gap='0.4rem'
        >
          <Span
            className='exp-tab-content-span'
            $textColor='var(--clr-emerald-400)'
            $fontSize='calc(var(--font-size-base) - 0.2rem)'
            $ltrSpacing='0.1rem'
          >
            Resources that i used:
          </Span>

          <List>
            {sectionsContent[1]?.content[0]?.resources?.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </List>
        </Div>
      ) : null}

      {/* !ONLY FOR LEARNING SECTION */}
      {sectionIndex === 1 ? (
        <Div
          $direction='column'
          $gap='0.4rem'
        >
          <Span
            className='exp-tab-content-span'
            $textColor='var(--clr-emerald-400)'
            $fontSize='calc(var(--font-size-base) - 0.2rem)'
            $ltrSpacing='0.1rem'
          >
            Topics covered:
          </Span>

          <List>
            {sectionsContent[1]?.content[0]?.topicsCovered?.map(
              (skill, index) => (
                <ListItem key={index}>{skill}</ListItem>
              )
            )}
          </List>
        </Div>
      ) : null}

      {/* !ONLY FOR COURSE SECTION */}
      {sectionIndex === 0 ? (
        <Div
          $direction='column'
          $gap='0.4rem'
        >
          <Span
            className='exp-tab-content-span'
            $textColor='var(--clr-emerald-400)'
            $fontSize='calc(var(--font-size-base) - 0.2rem)'
            $ltrSpacing='0.1rem'
          >
            Topics covered:
          </Span>

          <List>
            {sectionsContent[0]?.content[0]?.skills?.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </List>
        </Div>
      ) : null}

      {/* !ONLY FOR COURSE SECTION */}
      {sectionIndex === 0 && (
        <Tooltip text='View udemy certificate'>
          <Link
            className='exp-tab-content-link'
            $textColor='var(--clr-emerald-400)'
            $fontSize='calc(var(--font-size-base) - 0.2rem)'
            $fontWeight='700'
            $hoverTextColor='var(--clr-stone-200)'
            $focusTextColor='var(--clr-stone-200)'
            href={sectionsContent[0]?.content[0]?.certificate}
            rel='noopener noreferrer'
            target='_blank'
          >
            Certficate
          </Link>
        </Tooltip>
      )}
    </Wrapper>
  );
}

export default ExperienceTabContent;
