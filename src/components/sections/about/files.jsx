import React from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { SiReact, SiSupabase } from 'react-icons/si';
import styled from 'styled-components';
import { Div } from '../../../interface/styledComponents';

const StyledFiles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    gap: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const Button = styled.span`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg-clr-contrast);
  background-color: transparent;
  font-size: calc(var(--font-size-base) - 0.2rem);
  font-family: var(--font-fam-sans);
  padding: 0.6rem 1.2rem;

  svg {
    color: var(--clr-stone-400);
    font-size: var(--font-size-base);
  }

  &.active {
    color: var(--clr-stone-200);
    background-color: rgba(99, 99, 107, 0.3);
    border-radius: 0.4rem;

    svg {
      color: var(--clr-sky-600);
    }
  }

  &:focus {
    outline: none;
    border: none;
  }

  @media screen and (max-width: 768px) {
    font-size: var(--font-size-sm);
    padding: 0.4rem 0.8rem;

    svg {
      font-size: calc(var(--font-size-base) - 0.2rem);
    }
  }

  @media screen and (max-width: 480px) {
    font-size: calc(var(--font-size-sm) - 0.1rem);
    padding: 0.3rem 0.6rem;

    svg {
      font-size: calc(var(--font-size-base) - 0.3rem);
    }

    &.hide-last-button {
      display: none;
    }
  }
`;

const Sentence = styled.p`
  color: var(--clr-stone-200);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  line-height: 1.4;
  letter-spacing: 0.05rem;
  word-spacing: 0.05rem;

  @media screen and (max-width: 1364px) {
    font-size: calc(var(--font-size-base) - 0.1rem);
  }

  @media screen and (max-width: 1024px) {
    font-size: calc(var(--font-size-base) - 0.2rem);
  }

  @media screen and (max-width: 768px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
    line-height: 1.3;
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-sm);
    line-height: 1.2;
  }
`;

function Files() {
  const filesLabels = [
    { icon: <IoMdInformationCircle />, label: 'README.md' },
    { icon: <SiReact />, label: 'App.jsx' },
    { icon: <SiSupabase />, label: 'Supabase.js' },
  ];

  return (
    <StyledFiles>
      <Div
        className='about-files-container'
        $alignItems='center'
        $gap='1.6rem'
      >
        {filesLabels.map((label, index) => (
          <File
            key={index}
            icon={label.icon}
            label={label.label}
            index={index}
            labels={filesLabels}
          />
        ))}
      </Div>

      <FileData />
    </StyledFiles>
  );
}

function File({ icon, label, index, labels }) {
  return (
    <Button
      className={`${index === 0 ? 'active' : ''} ${
        index === labels?.length - 1 ? 'hide-last-button' : ''
      }`}
    >
      {icon}&nbsp;{label}
    </Button>
  );
}

function FileData() {
  const sentences = [
    'What`s up mate, my name is Marian.',
    'I just try to build cute and nice things for the web.',
    `I also want to be a front-end developer (or maybe i already am, whoknows), specializing in building complex user interfaces.`,
    'My current focus is on honing my skills in React while seeking opportunities that not only allow me to grow professionally but also enrich me personally.',
    'Take a scroll through my work and see what a year of self directed learning has brought.',
    'Every feature, every line of code - all crafted by me, without the traditional classroom setting.',
    "Let's continue this journey below.",
  ];

  return (
    <div>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          <Sentence>{sentence}</Sentence>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Files;
