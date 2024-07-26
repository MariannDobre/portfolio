import React from 'react';
import styled from 'styled-components';
import {
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
} from 'react-icons/vsc';
import { IoIosGitBranch } from 'react-icons/io';

const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    gap: 1.6rem;
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    gap: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const Button = styled.span`
  --feature-dimension-default: 2.4rem;
  --feature-dimension-laptop-lg: 2.2rem;
  --feature-dimension-laptop: 2rem;
  --feature-dimension-tablet: 1.8rem;
  --feature-dimension-mobile: 1.6rem;

  position: relative;
  width: var(--feature-dimension-default);
  height: var(--feature-dimension-default);

  svg {
    color: var(--bg-clr-contrast);
    width: var(--feature-dimension-default);
    height: var(--feature-dimension-default);
  }

  &.active {
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 0.1rem;
      height: 100%;
      background-color: var(--clr-white);
      left: calc(-1.6rem - 0.1rem);
    }

    svg {
      color: var(--clr-white) !important;
    }
  }

  @media screen and (max-width: 1364px) {
    width: var(--feature-dimension-laptop-lg);
    height: var(--feature-dimension-laptop-lg);

    svg {
      width: var(--feature-dimension-laptop-lg);
      height: var(--feature-dimension-laptop-lg);
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

  @media screen and (max-width: 480px) {
    width: var(--feature-dimension-mobile);
    height: var(--feature-dimension-mobile);

    svg {
      width: var(--feature-dimension-mobile);
      height: var(--feature-dimension-mobile);
    }
  }
`;

function Features() {
  const featuresLabels = [
    <VscFiles />,
    <VscSearch />,
    <IoIosGitBranch />,
    <VscDebugAlt />,
    <VscExtensions />,
  ];

  return (
    <StyledFeatures>
      {featuresLabels.map((label, index) => (
        <Feature
          key={index}
          icon={label}
          isActive={index === 0}
        />
      ))}
    </StyledFeatures>
  );
}

function Feature({ icon, isActive }) {
  return <Button className={isActive ? 'active' : ''}>{icon}</Button>;
}

export default Features;
