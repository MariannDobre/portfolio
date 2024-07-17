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
`;

const Feature = styled.span`
  --feature-width: 2.8rem;
  --feature-height: 2.8rem;

  position: relative;
  width: var(--feature-width);
  height: var(--feature-height);

  svg {
    color: var(--bg-clr-contrast);
    width: var(--feature-width);
    height: var(--feature-height);
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
