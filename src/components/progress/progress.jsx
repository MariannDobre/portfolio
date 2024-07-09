import React from 'react';
import styled from 'styled-components';
import { Bar } from '../../styledComponents';
import { FaRegUser } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';

const SProgress = styled.div`
  --width: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--width);
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
  return (
    <SProgress>
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
        $height='calc(10rem + 56rem + 20rem + 3.2rem + 0.8rem + 1.6rem)'
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
        $height='24rem'
        $background='linear-gradient(to bottom, var(--clr-emerald-600), transparent)'
        $y='1.6rem'
      />
    </SProgress>
  );
}

export default Progress;
