import React from 'react';
import { Blur, Box } from '../../interface/styledComponents';
import { IoIosGitBranch } from 'react-icons/io';
import Dots from './dots';
import Features from './features';
import styled from 'styled-components';
import Files from './files';

const SHeaderContent = styled.header`
  --max-width: 116rem;
  --height: 56rem;
  --height-tablet: 60rem;
  --padding: 1.6rem;
  --rounded: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
  max-width: var(--max-width);
  height: var(--height);
  background-color: var(--bg-clr-secondary);
  padding: var(--padding);
  border: 0.1rem solid var(--bg-clr-contrast);
  border-radius: var(--rounded);

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    .mediaGap {
      gap: 2rem;
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    height: var(--height-tablet);

    .mediaGap {
      gap: 1.6rem;
    }
  }
`;

const Branch = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--bg-clr-contrast);
  font-size: calc(var(--font-size-sm) + 0.2rem);
  font-family: var(--font-fam-sans);
  margin-top: auto;

  svg {
    font-size: var(--font-size-base);
  }
`;

function HeaderContent() {
  return (
    <SHeaderContent>
      <Dots />

      <Box
        className='mediaGap'
        $gap='2.4rem'
      >
        <Features />

        <Box
          $width='100%'
          $direction='column'
          $gap='2.4rem'
        >
          <Files />
        </Box>
      </Box>

      <Branch>
        <IoIosGitBranch />
        master
      </Branch>

      <Blur
        $top='6rem'
        $left='2rem'
        $blurRadius='16rem'
        $spreadRadius='8rem'
        $shadowColor='var(--clr-sky-600)'
        $zIndex='-1'
      />

      <Blur
        $top='52rem'
        $right='4rem'
        $blurRadius='16rem'
        $spreadRadius='8rem'
        $shadowColor='var(--clr-violet-600)'
        $zIndex='-1'
      />
    </SHeaderContent>
  );
}

export default HeaderContent;
