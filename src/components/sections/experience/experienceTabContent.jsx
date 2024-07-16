import React from 'react';
import {
  Box,
  Link,
  SectionHeading,
  SectionSubheading,
  Span,
} from '../../../interface/styledComponents';
import styled from 'styled-components';
import Tooltip from '../../../interface/tooltip';

// UI COMPONENTS
const Description = styled.p`
  color: var(--clr-stone-400);
  font-size: calc(var(--font-size-base) - 0.2rem);
  letter-spacing: 0.15rem;
  word-spacing: 0.15rem;
`;

const List = styled.ul`
  --padding: 0 0 1.6rem 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: var(--padding);
`;

const ListItem = styled.li`
  color: var(--clr-stone-400);
  font-size: calc(var(--font-size-base) - 0.2rem);
  letter-spacing: 0.15rem;
  word-spacing: 0.15rem;

  &::marker {
    color: var(--clr-emerald-600);
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
  // {
  //   id: 3,
  //   value: 'practice',
  //   title: 'Mini Projects',
  //   content: [
  //     {
  //       description: 'Small projects to practice and solidify learning',
  //     },
  //   ],
  // },
];

const title = sectionsContent.map((content) => content?.title);
const subtitle = sectionsContent.map(
  (content) => content?.content[0]?.subtitle
);
const description = sectionsContent.map(
  (content) => content?.content[0]?.description
);

function ExperienceTabContent({ sectionIndex }) {
  return (
    <Box
      style={{ fontFamily: 'var(--font-fam-sans)', paddingLeft: '2rem' }}
      $direction='column'
      $width='100%'
      $height='100%'
    >
      <SectionHeading
        $textColor='var(--clr-emerald-600)'
        $fontSize='var(--font-size-lg)'
        $t='0.8rem'
        $r='0'
        $b='1.6rem'
        $l='0'
        $ltrSpacing='0.15rem'
        $wordSpacing='0.15rem'
      >
        {title[sectionIndex]}
      </SectionHeading>

      {/* Subtitle of each section */}
      <SectionSubheading
        $textColor='var(--clr-stone-200)'
        $fontSize='calc(var(--font-size-base) - 0.1rem)'
        $ltrSpacing='0.15rem'
        $wordSpacing='0.15rem'
      >
        {subtitle[sectionIndex] ? subtitle[sectionIndex] : null}
      </SectionSubheading>

      {/* !ONLY FOR COURSE SECTION */}
      {sectionIndex === 0 ? (
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: 'var(--clr-emerald-600)',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'bold',
            letterSpacing: '0.15rem',
            wordSpacing: '0.15rem',
            paddingTop: '1.6rem',
            paddingBottom: '0.8rem',
          }}
        >
          Platform:&nbsp;
          <Span
            $textColor='var(--clr-stone-200)'
            $fontSize='var(--font-size-base)'
            $ltrSpacing='0.15rem'
            $wordSpacing='0.15rem'
          >
            {sectionsContent[0]?.content[0]?.platform}
          </Span>
        </p>
      ) : null}

      {/* Description of each section */}
      <Description>
        {description[sectionIndex] ? description[sectionIndex] : null}
      </Description>

      {/* !ONLY FOR LEARNING SECTION */}
      {sectionIndex === 1 ? (
        <Box
          $direction='column'
          $gap='0.8rem'
        >
          <Span
            style={{
              paddingTop: '1.6rem',
            }}
            $textColor='var(--clr-emerald-600)'
            $fontSize='var(--font-size-base)'
            $fontWeight='bold'
            $ltrSpacing='0.15rem'
            $wordSpacing='0.15rem'
          >
            Resources that i used:
          </Span>

          <List>
            {sectionsContent[1]?.content[0]?.resources?.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </List>
        </Box>
      ) : null}

      {/* !ONLY FOR LEARNING SECTION */}
      {sectionIndex === 1 ? (
        <Box
          $direction='column'
          $gap='0.8rem'
        >
          <Span
            $textColor='var(--clr-emerald-600)'
            $fontSize='var(--font-size-base)'
            $fontWeight='bold'
            $ltrSpacing='0.15rem'
            $wordSpacing='0.15rem'
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
        </Box>
      ) : null}

      {/* !ONLY FOR COURSE SECTION */}
      {sectionIndex === 0 ? (
        <Box
          $direction='column'
          $gap='0.8rem'
        >
          <Span
            style={{
              paddingTop: '1.6rem',
            }}
            $textColor='var(--clr-emerald-600)'
            $fontSize='var(--font-size-base)'
            $fontWeight='bold'
            $ltrSpacing='0.15rem'
            $wordSpacing='0.15rem'
          >
            Topics covered:
          </Span>

          <List>
            {sectionsContent[0]?.content[0]?.skills?.map((skill, index) => (
              <ListItem key={index}>{skill}</ListItem>
            ))}
          </List>
        </Box>
      ) : null}

      {/* !ONLY FOR COURSE SECTION */}
      {sectionIndex === 0 ? (
        <Tooltip text='View udemy certificate'>
          <Link
            $textColor='var(--clr-emerald-600)'
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
      ) : null}
    </Box>
  );
}

export default ExperienceTabContent;
