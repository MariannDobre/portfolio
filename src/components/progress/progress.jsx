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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 2.4rem;
  height: 2.4rem;

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
    font-size: ${(props) => props.$iconSize};
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
        $width='0.3rem'
        $height='calc(13.5rem - 3.2rem - 0.8rem - 3.2rem)'
        $background='linear-gradient(to bottom, transparent, var(--clr-violet-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaRegUser />}
        iconSize='2.4rem'
        blurColor='var(--clr-violet-400)'
      />

      <Bar
        $width='0.3rem'
        $height='calc(10rem + 56rem + 20rem + 3.2rem + 0.8rem + 1.6rem + 0.2rem)'
        $background='linear-gradient(to bottom, var(--clr-violet-400) 15%, var(--clr-sky-600), var(--clr-emerald-600))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaCode />}
        iconSize='2.4rem'
        blurColor='var(--clr-emerald-600)'
      />

      <Bar
        $width='0.3rem'
        $height='calc(10rem + 20rem + 48rem + 7.2rem - 1.6rem)'
        $background='linear-gradient(to bottom, var(--clr-emerald-600) 15%, var(--clr-emerald-300), var(--clr-orange-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaWrench />}
        iconSize='2.4rem'
        blurColor='var(--clr-orange-400)'
      />

      <Bar
        $width='0.3rem'
        $height='calc(10rem + 20rem + 92rem + 7.2rem - 1.6rem + 0.2rem)'
        $background='linear-gradient(to bottom, var(--clr-orange-400) 15%, var(--clr-yellow-400), var(--clr-rose-400) 75%)'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<TfiEmail />}
        iconSize='2.4rem'
        blurColor='var(--clr-rose-400)'
      />

      <Bar
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
