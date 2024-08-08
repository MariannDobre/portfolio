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

  @media screen and (max-width: 1024px) {
    padding-left: 1.6rem;
  }

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 1024px) {
    width: var(--dimensions-laptop);
    height: var(--dimensions-laptop);
  }

  @media screen and (max-width: 768px) {
    width: var(--dimensions-tablet);
    height: var(--dimensions-tablet);
  }

  @media screen and (max-width: 480px) {
    &.intro-circle {
      display: none;
    }
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

  @media screen and (max-width: 1024px) {
    width: var(--dimension-laptop);
    height: var(--dimension-laptop);
  }

  @media screen and (max-width: 768px) {
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

function Progress({ sectionsHeights }) {
  const { ref: aboutBar, inView: isAboutBarInView } = useInView();
  const { ref: expBar, inView: isExpBarInView } = useInView();
  const { ref: projectsBar, inView: isProjectsBarInView } = useInView();
  const { ref: contactBar, inView: isContactBarInView } = useInView();
  const deviceWidth = window.innerWidth;
  const sectionsGap = '20rem';
  const barMarginsY = 'calc(2 * 1.6rem)';

  const iconSize = () => {
    let iconSize = '2.4rem';

    if (deviceWidth <= 480) {
      iconSize = '1.6rem';
    } else if (deviceWidth <= 768) {
      iconSize = '1.8rem';
    } else if (deviceWidth <= 1024) {
      iconSize = '2.0rem';
    } else if (deviceWidth <= 1364) {
      iconSize = '2.2rem';
    }

    return iconSize;
  };

  const circleSize = () => {
    let circleSize = '1.2rem';

    if (deviceWidth <= 768) {
      circleSize = '0.8rem';
    } else if (deviceWidth <= 1024) {
      circleSize = '1rem';
    }

    return circleSize;
  };

  const getContactHeadingHeight = () => {
    let headingHeight = '8.4rem';

    if (deviceWidth <= 480) {
      headingHeight = '5.6rem';
    } else if (deviceWidth <= 768) {
      headingHeight = '6.2rem';
    } else if (deviceWidth <= 1024) {
      headingHeight = '6.8rem';
    } else if (deviceWidth <= 1364) {
      headingHeight = '7.4rem';
    }

    return headingHeight;
  };

  const getAboutBarHeight = () => {
    let barHeight = `calc(${
      sectionsHeights[0]
    }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY})`;

    if (deviceWidth <= 480) {
      barHeight = `calc(${
        sectionsHeights[0]
      }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY} + 2.8rem - 0.4rem)`;
    } else if (deviceWidth <= 598) {
      barHeight = `calc(${
        sectionsHeights[0]
      }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY} + 2.8rem)`;
    }

    return barHeight;
  };

  const getExpBarHeight = () => {
    let barHeight = `calc(${
      sectionsHeights[1]
    }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY})`;

    if (deviceWidth <= 400) {
      barHeight = `calc(${
        sectionsHeights[1]
      }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY} - 2.8rem + 0.4rem + 2.4rem)`;
    } else if (deviceWidth <= 480) {
      barHeight = `calc(${
        sectionsHeights[1]
      }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY} - 2.8rem + 0.4rem)`;
    } else if (deviceWidth <= 598) {
      barHeight = `calc(${
        sectionsHeights[1]
      }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY} - 2.8rem)`;
    }

    return barHeight;
  };

  // console.log('about bar: ', sectionsHeights[0]);
  // console.log('exp bar: ', sectionsHeights[1]);
  // console.log('projects bar: ', sectionsHeights[2]);
  // console.log('contact bar: ', sectionsHeights[3]);

  return (
    <SProgress>
      <Circle className='intro-circle' />

      <Bar
        className='intro-bar'
        $width='0.3rem'
        // heading section height - bar margins on Y axis - icon size - circle size
        $height={`calc(8.4rem - ${barMarginsY} - 2.4rem - ${circleSize()})`}
        $background='linear-gradient(to bottom, transparent, var(--clr-violet-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaRegUser />}
        blurColor='var(--clr-violet-400)'
      />

      <Bar
        ref={aboutBar}
        className={isAboutBarInView ? 'bar-visible' : 'bar-hidden'}
        $width='0.3rem'
        $height={getAboutBarHeight()}
        $background='linear-gradient(to bottom,  var(--clr-violet-400) 15%, var(--clr-sky-600), var(--clr-emerald-600))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaCode />}
        blurColor='var(--clr-emerald-600)'
      />

      <Bar
        ref={expBar}
        className={isExpBarInView ? 'bar-visible' : 'bar-hidden'}
        $width='0.3rem'
        $height={getExpBarHeight()}
        $background='linear-gradient(to bottom,  var(--clr-emerald-600) 15%, var(--clr-emerald-300), var(--clr-orange-400))'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<FaWrench />}
        blurColor='var(--clr-orange-400)'
      />

      <Bar
        ref={projectsBar}
        className={isProjectsBarInView ? 'bar-visible' : 'bar-hidden'}
        $width='0.3rem'
        // section height from clientHeight + the gap between sections - icons size - bar margins on Y axis
        $height={
          deviceWidth <= 400
            ? `calc(${
                sectionsHeights[2]
              }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY} - 2.4rem)`
            : `calc(${
                sectionsHeights[2]
              }px + ${sectionsGap} - ${iconSize()} - ${barMarginsY})`
        }
        $background='linear-gradient(to bottom, var(--clr-orange-400) 15%, var(--clr-yellow-400), var(--clr-rose-400) 75%)'
        $y='1.6rem'
      />

      <SectionMarker
        icon={<TfiEmail />}
        blurColor='var(--clr-rose-400)'
      />

      <Bar
        ref={contactBar}
        className={isContactBarInView ? 'bar-visible' : 'bar-hidden'}
        $width='0.3rem'
        //
        $height={`calc(${
          sectionsHeights[3]
        }px - ${getContactHeadingHeight()} - 3.2rem - ${circleSize()})`}
        $background='linear-gradient(to bottom, var(--clr-rose-400), transparent)'
        $y='1.6rem'
      />

      <Circle />
    </SProgress>
  );
}

export default Progress;
