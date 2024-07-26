import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Bar } from '../../interface/styledComponents';
import { FaRegUser, FaWrench } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import styled from 'styled-components';

const SProgress = styled.div`
  --width: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--width);
  padding-left: 2rem;

  @media screen and (max-width: 1364px) {
    padding-left: 1.8rem;
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    padding-left: 1.6rem;
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    padding-left: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    padding-left: 1.2rem;
  }
`;

const Circle = styled.div`
  --dimensions-default: 1.2rem;
  --dimensions-laptop: 1rem;
  --dimensions-tablet: 0.8rem;
  --rounded: 50%;

  width: var(--dimensions-default);
  height: var(--dimensions-default);
  background-color: transparent;
  border: 0.25rem solid var(--clr-gray-dark);
  border-radius: var(--rounded);

  @media screen and (max-width: 1364px) {
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    width: var(--dimensions-laptop);
    height: var(--dimensions-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    width: var(--dimensions-tablet);
    height: var(--dimensions-tablet);
  }

  @media screen and (max-width: 480px) {
  }
`;

const Section = styled.div`
  --dimension: 2.4rem;
  --dimension-laptop-lg: 2.2rem;
  --dimension-laptop: 2rem;
  --dimension-tablet: 1.8rem;
  --dimension-mobile: 1.6rem;

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
    filter: blur(14px);
  }

  svg {
    color: var(--clr-white);
    font-size: 1.8rem;
  }

  @media screen and (max-width: 1364px) {
    width: var(--dimension-laptop-lg);
    height: var(--dimension-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    width: var(--dimension-laptop);
    height: var(--dimension-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    width: var(--dimension-tablet);
    height: var(--dimension-tablet);

    span {
      filter: blur(10px);
    }

    svg {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: var(--dimension-mobile);
    height: var(--dimension-mobile);

    svg {
      font-size: 1.4rem;
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

function Progress({ sectionIndex }) {
  const { ref: aboutBarRef, inView: isAboutBarInView } = useInView();
  const { ref: expBarRef, inView: isExpBarInView } = useInView();
  const { ref: projectsRef, inView: isProjectsBarInView } = useInView();

  return (
    <SProgress>
      {/* <Circle />

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

      <Circle /> */}

      <Circle />

      <Bar
        $width='0.3rem'
        // heading section height - bar margins on Y axis - heading section gap - icon size
        $height='calc(10.6rem - (1.6rem * 2) - 1.6rem - 2.4rem)'
        $background='linear-gradient(to bottom, transparent, var(--clr-violet-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaRegUser />}
        blurColor='var(--clr-violet-400)'
      />

      <Bar
        ref={aboutBarRef}
        className={isAboutBarInView ? 'bar-visible' : 'bar-hidden'}
        $width='0.3rem'
        // the gap between heading section and section content + section content height + gap between sections - bar top margin + heading of the section subtitle + bar bottom margin + section heading gap + line-height gap
        $height='calc(3.2rem + 60rem + 20rem - 1.6rem + 3.2rem + 1.6rem + 1.6rem + 0.2rem)'
        $background='linear-gradient(to bottom,  var(--clr-violet-400) 15%, var(--clr-sky-600), var(--clr-emerald-600))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaCode />}
        blurColor='var(--clr-emerald-600)'
      />

      <Bar
        ref={expBarRef}
        className={`${isExpBarInView ? 'bar-visible' : 'bar-hidden'} ${
          sectionIndex === 0 ? 'bar-course-height' : 'bar-learning-height'
        }`}
        $width='0.3rem'
        // the gap between heading section and section content + gap between sections + content section height + next section subtitle height + gap between next sectiont titles + line-height gap
        $height={
          sectionIndex === 0
            ? 'calc(3.2rem + 20rem + 40rem + 3.2rem + 1.6rem + 0.2rem)'
            : 'calc(3.2rem + 20rem + 44rem + 3.2rem + 1.6rem + 0.2rem)'
        }
        $background='linear-gradient(to bottom,  var(--clr-emerald-600) 15%, var(--clr-emerald-300), var(--clr-orange-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaWrench />}
        blurColor='var(--clr-orange-400)'
      />

      <Bar
        ref={projectsRef}
        className={isProjectsBarInView ? 'bar-visible' : 'bar-hidden'}
        $width='0.3rem'
        //
        $height='calc(3.2rem + 20rem + (3 * 2rem) + (3 * 28rem) + 3.2rem - 0.2rem)'
        $background='linear-gradient(to bottom, var(--clr-orange-400) 15%, var(--clr-yellow-400), var(--clr-rose-400) 75%)'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<TfiEmail />}
        blurColor='var(--clr-rose-400)'
      />

      <Bar
        $width='0.3rem'
        //
        $height='calc(3.2rem + 24rem)'
        $background='linear-gradient(to bottom, var(--clr-rose-400), transparent)'
        $y='1.6rem'
      />

      <Circle />
    </SProgress>
  );
}

export default Progress;
