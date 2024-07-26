import React from 'react';
import styled from 'styled-components';
import { Div } from './styledComponents';

const StyledSectionTitle = styled.h1`
  --ltr-spacing-default: 0.1rem;
  --word-spacing-default: 0.1rem;

  color: var(--clr-stone-200);
  font-size: calc(var(--font-size-3xl) + 0.8rem);
  font-family: var(--font-fam-sans);
  letter-spacing: var(--ltr-spacing-default);
  word-spacing: var(--word-spacing-default);
  padding: 0;
  margin: 0;

  @media screen and (max-width: 1364px) {
    font-size: var(--font-size-3xl);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-2xl);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: var(--font-size-xl);
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-lg);
  }
`;

const StyledSectionSubtitle = styled.p`
  --ltr-spacing-default: 0.05rem;
  --word-spacing-default: 0.05rem;

  color: ${(props) => props.$subtitleTextColor || 'var(--clr-white)'};
  font-size: var(--font-size-lg);
  font-family: var(--font-fam-sans);
  letter-spacing: var(--ltr-spacing-default);
  word-spacing: var(--word-spacing-default);
  padding: 0;
  margin: 0;

  @media screen and (max-width: 1364px) {
    font-size: calc(var(--font-size-lg) - 0.2rem);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-md);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    font-size: calc(var(--font-size-md) - 0.2rem);
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-base);
  }
`;

function SectionHeadings({ title, subtitle, subtitleTextColor }) {
  return (
    <Div
      style={{ marginBottom: '3.2rem' }}
      $direction='column'
      $gap='1.6rem'
      $width='100%'
      $maxWidth='100%'
      $bgColor='purple'
    >
      <SectionTitle title={title} />
      <SectionSubtitle
        subtitle={subtitle}
        subtitleTextColor={subtitleTextColor}
      />
    </Div>
  );
}

function SectionTitle({ title }) {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
}

function SectionSubtitle({ subtitle, subtitleTextColor }) {
  return (
    <StyledSectionSubtitle $subtitleTextColor={subtitleTextColor}>
      {subtitle}
    </StyledSectionSubtitle>
  );
}

export default SectionHeadings;
