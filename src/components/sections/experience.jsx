import React, { useState } from 'react';
import styled from 'styled-components';

const sectionsButtons = [
  { id: 1, label: 'course', value: 'course' },
  { id: 2, label: 'learning', value: 'learning' },
  { id: 3, label: 'practice', value: 'practice' },
];

const sectionsData = [
  { id: 1, value: 'course', heading: 'Course that i`ve followed', content: '' },
  { id: 2, value: 'learning', heading: 'Independent study', content: [] },
  {
    id: 3,
    value: 'practice',
    heading: 'Small projects to practice and solidify learning',
    content: [],
  },
];

const data = sectionsData.map((data) => data.value);
const title = sectionsData.map((data) => data.heading);

//
const SExperience = styled.section``;

//
const HeadingsContainer = styled.div`
  --margin: 10rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-family: var(--font-fam-sans);
  margin-bottom: var(--margin);
`;

const SExperienceHeading = styled.h3`
  color: var(--clr-stone-200);
  font-size: calc(var(--font-size-3xl) * 1.5);
`;

const SExperienceSubheading = styled.p`
  color: var(--clr-emerald-600);
  font-size: var(--font-size-lg);
`;

//
const SExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 15.9rem;
  background-color: aliceblue;
`;

const Sections = styled.div`
  --width: 20rem;

  width: var(--width);
  background-color: blue;
`;

const Button = styled.button`
  --width: 20rem;
  --padding: 1.6rem 0 1.6rem 2rem;

  outline: none;
  border: none;
  border-left: 0.2rem solid var(--clr-stone-400);
  display: flex;
  align-items: flex-start;
  width: var(--width);
  color: var(--clr-stone-400);
  background-color: transparent;
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  font-weight: var(--font-weight-500);
  text-transform: capitalize;
  letter-spacing: 0.15rem;
  padding: var(--padding);
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(5, 150, 105, 0.15);
  }
`;

//
const SectionsContent = styled.div`
  --width: 100%;
  --height: 100%;

  width: var(--width);
  height: var(--height);
  background-color: green;
`;

const ContentTitle = styled.h1`
  --padding: 1.6rem 0 1.6rem 2rem;

  color: var(--clr-stone-200);
  font-size: var(--font-size-lg);
  font-family: var(--font-fam-sans);
  letter-spacing: 0.15rem;
  word-spacing: 0.15rem;
  padding: var(--padding);
`;

function Experience() {
  const [sectionValue, setSectionValue] = useState('course');
  console.log(data === sectionValue);

  return (
    <SExperience>
      <HeadingsContainer>
        <SExperienceHeading>A journey of self - discovery</SExperienceHeading>

        <SExperienceSubheading>Experience</SExperienceSubheading>
      </HeadingsContainer>

      <SExperienceContainer>
        <Sections>
          {sectionsButtons.map((button) => (
            <Button
              style={{
                color:
                  sectionValue === button.value ? 'var(--clr-emerald-600)' : '',
                borderLeftColor:
                  sectionValue === button.value ? 'var(--clr-emerald-600)' : '',
              }}
              key={button.id}
              value={button.value}
              onClick={() => setSectionValue(button.value)}
            >
              {button.label}
            </Button>
          ))}
        </Sections>

        <SectionsContent>
          <ContentTitle>{}</ContentTitle>
        </SectionsContent>
      </SExperienceContainer>
    </SExperience>
  );
}

export default Experience;
