import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Bar } from '../../interface/styledComponents';
import { FaRegUser, FaWrench } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';

const SProgress = styled.div`
  --width: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--width);

  transition: all 3.5s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
  }
`;

const Circle = styled.div`
  --width: 1.2rem;
  --height: 1.2rem;
  --rounded: 50%;

  width: var(--width);
  height: var(--height);
  background-color: transparent;
  border: 0.25rem solid var(--clr-gray-dark);
  border-radius: var(--rounded);
`;

const Section = styled.div`
  --dimension: 2.4rem;
  --dimension-laptop: 2rem;
  --dimension-mobile: 1.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: var(--dimension);
  height: var(--dimension);

  span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: ${(props) => props.$blurColor};
    filter: blur(16px);
  }

  svg {
    color: var(--clr-white);
    font-size: ${(props) => props.$iconSize || '2.4rem'};
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    width: var(--dimension-laptop);
    height: var(--dimension-laptop);

    svg {
      font-size: var(--font-size-md);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    svg {
      font-size: calc(var(--font-size-md) - 0.2rem);
    }
  }

  @media screen and (max-width: 480px) {
    width: var(--dimension-mobile);
    height: var(--dimension-mobile);

    svg {
      font-size: var(--font-size-base);
    }
  }
`;

function SectionMarker({ icon, iconSize, blurColor }) {
  return (
    <Section
      $iconSize={iconSize}
      $blurColor={blurColor}
    >
      {icon}
      <span></span>
    </Section>
  );
}

function Progress() {
  const { ref: progressRef, inView: isInView } = useInView();

  return (
    <SProgress
      ref={progressRef}
      className={isInView ? 'visible' : 'hidden'}
    >
      <Circle />

      <Bar
        className='intro-bar'
        $width='0.3rem'
        $height='calc(13.5rem - 3.2rem - 0.8rem - 3.2rem)'
        $background='linear-gradient(to bottom, transparent, var(--clr-violet-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaRegUser />}
        blurColor='var(--clr-violet-400)'
      />

      <Bar
        className='about-bar'
        $width='0.3rem'
        $height='calc(10rem + 56rem + 20rem + 3.2rem + 0.8rem + 1.6rem + 0.2rem)'
        $background='linear-gradient(to bottom, var(--clr-violet-400) 15%, var(--clr-sky-600), var(--clr-emerald-600))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaCode />}
        blurColor='var(--clr-emerald-600)'
      />

      <Bar
        className='experience-bar'
        $width='0.3rem'
        $height='calc(10rem + 20rem + 48rem + 7.2rem - 1.6rem)'
        $background='linear-gradient(to bottom, var(--clr-emerald-600) 15%, var(--clr-emerald-300), var(--clr-orange-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaWrench />}
        blurColor='var(--clr-orange-400)'
      />

      <Bar
        className='projects-bar'
        $width='0.3rem'
        $height='calc(10rem + 20rem + 92rem + 7.2rem - 1.6rem + 0.2rem)'
        $background='linear-gradient(to bottom, var(--clr-orange-400) 15%, var(--clr-yellow-400), var(--clr-rose-400) 75%)'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<TfiEmail />}
        blurColor='var(--clr-rose-400)'
      />

      <Bar
        className='contact-bar'
        $width='0.3rem'
        $height='calc(10rem + 46.4rem - 1.6rem * 2 - 0.8rem)'
        $background='linear-gradient(to bottom, var(--clr-rose-400), transparent)'
        $y='1.6rem'
      />

      <Circle />
    </SProgress>
  );
}

export default Progress;
