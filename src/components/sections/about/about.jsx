import React from 'react';
import styled from 'styled-components';
import AboutContent from './aboutContent';
import { Div } from '../../../interface/styledComponents';
import { IoIosGitBranch } from 'react-icons/io';

const StyledAboutContent = styled.aside`
  --max-width-default: 140rem;

  --height-default: 60rem;
  --height-laptop-lg: 58rem;
  --height-laptop: 56rem;

  --padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  outline: none;
  border: 0.1rem solid var(--bg-clr-contrast);
  background-color: var(--bg-clr-secondary);
  max-width: var(--max-width-default);
  height: var(--height-default);
  border-radius: 0.8rem;
  padding: var(--padding);

  @media screen and (max-width: 1364px) {
    height: var(--height-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    height: var(--height-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

const Branch = styled.span`
  display: flex;
  align-items: center;
  color: var(--bg-clr-contrast);
  font-size: calc(var(--font-size-sm) + 0.2rem);
  font-family: var(--font-fam-sans);
  margin-top: auto;

  svg {
    font-size: var(--font-size-base);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: calc(var(--font-size-sm) + 0.1rem);

    svg {
      font-size: calc(var(--font-size-base) - 0.1rem);
    }
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-sm);

    svg {
      font-size: calc(var(--font-size-base) - 0.2rem);
    }
  }
`;

function About() {
  return (
    <StyledAboutContent>
      <Dots />

      <AboutContent />

      <Branch>
        <IoIosGitBranch />
        &nbsp;master
      </Branch>
    </StyledAboutContent>
  );
}

// COMPONENTS FOR ABOUT COMPONENT
const Dot = styled.span`
  --dot-dimensions-default: 1.2rem;
  --dot-dimensions-tablet: 1rem;
  --dot-dimensions-mobile: 0.8rem;

  display: block;
  width: var(--dot-dimensions-default);
  height: var(--dot-dimensions-default);
  border-radius: 50%;

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    width: var(--dot-dimensions-tablet);
    height: var(--dot-dimensions-tablet);
  }

  @media screen and (max-width: 480px) {
    width: var(--dot-dimensions-mobile);
    height: var(--dot-dimensions-mobile);
  }
`;

function Dots() {
  const dotsColors = ['#dc2626', '#eab308', '#16a34a'];

  return (
    <Div
      $alignItems='center'
      $gap='0.8rem'
    >
      {dotsColors.map((color, index) => (
        <Dot
          key={index}
          style={{ backgroundColor: color }}
        />
      ))}
    </Div>
  );
}

export default About;
