import React from 'react';
import {
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
} from 'react-icons/vsc';
import { IoIosGitBranch } from 'react-icons/io';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    gap: 2rem;
  }
`;

const Feature = styled.span`
  --feature-dimension: 2.8rem;
  --feature-dimension-laptop: 2.4rem;
  --feature-dimension-tablet: 2rem;

  position: relative;
  width: var(--feature-dimension);
  height: var(--feature-dimension);

  svg {
    color: var(--bg-clr-contrast);
    width: var(--feature-dimension);
    height: var(--feature-dimension);
  }

  &.active {
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 0.2rem;
      height: 100%;
      background-color: var(--clr-white);
      left: -60%;
    }

    svg {
      color: var(--clr-white) !important;
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    width: var(--feature-dimension-laptop);
    height: var(--feature-dimension-laptop);

    svg {
      width: var(--feature-dimension-laptop);
      height: var(--feature-dimension-laptop);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    width: var(--feature-dimension-tablet);
    height: var(--feature-dimension-tablet);

    svg {
      width: var(--feature-dimension-tablet);
      height: var(--feature-dimension-tablet);
    }
  }
`;

function Features() {
  return (
    <FeaturesContainer>
      <Feature className='active'>
        <VscFiles />
      </Feature>

      <Feature>
        <VscSearch />
      </Feature>

      <Feature>
        <IoIosGitBranch />
      </Feature>

      <Feature>
        <VscDebugAlt />
      </Feature>

      <Feature>
        <VscExtensions />
      </Feature>
    </FeaturesContainer>
  );
}

export default Features;
