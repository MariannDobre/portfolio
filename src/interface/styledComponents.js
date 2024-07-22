import styled from 'styled-components';

// UI ELEMENTS
// ---------------------

export const Blur = styled.span`
  position: absolute;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  box-shadow: 0 0 ${(props) => props.$blurRadius}
    ${(props) => props.$spreadRadius} ${(props) => props.$shadowColor};
  z-index: ${(props) => props.$zIndex};
`;

Blur.defaultProps = {
  $top: 'auto',
  $right: 'auto',
  $bottom: 'auto',
  $left: 'auto',
  $blurRadius: '20rem',
  $spreadRadius: '10rem',
  $shadowColor: '#fff',
  $zIndex: '0',
};

export const Bar = styled.div`
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  background: ${(props) => props.$background || 'transparent'};
  margin: ${(props) => props.$y || '0'} ${(props) => props.$x || '0'};

  @media screen and (max-width: 1364px) {
    &.intro-bar {
      height: calc(9rem - 4.8rem);
    }

    &.about-bar {
      height: calc(10rem + 56rem + 20rem + 3.2rem);
    }

    &.experience-bar {
      height: calc(10rem + 20rem + 48rem + 3.3rem - 0.2rem);
    }

    &.projects-bar {
      height: calc(10rem + 20rem + 92rem + 3.3rem + 0.6rem - 0.4rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.intro-bar {
      height: calc(7.9rem - 4.3rem);
    }

    &.about-bar {
      height: calc(10rem + 56rem + 20rem + 2.8rem - 0.2rem);
    }

    &.experience-bar {
      height: calc(10rem + 20rem + 48rem + 2.8rem - 0.2rem);
    }

    &.projects-bar {
      height: calc(10rem + 20rem + 144.7rem + 7.9rem + 10rem - 2.8rem - 0.2rem);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    &.intro-bar {
      height: calc(6.7rem - 3.7rem - 0.4rem);
    }

    &.about-bar {
      height: calc(10rem + 56rem + 20rem + 3.7rem + 2.2rem - 0.4rem);
    }

    &.experience-bar {
      height: calc(10rem + 20rem + 48rem + 2.2rem - 0.4rem - 0.2rem);
    }

    &.projects-bar {
      height: calc(
        10rem + 20rem + 144.7rem + 6.7rem + 0.4rem + 3.7rem + 2.2rem + 0.4rem
      );
    }
  }

  /* MEDIA FOR HEADING BREAKING INTO NEW LINE */
  @media screen and (max-width: 601px) {
    &.about-bar {
      height: calc(10rem + 56rem + 20rem + 7.4rem + 2.2rem - 0.4rem);
    }
  }

  @media screen and (max-width: 480px) {
    &.intro-bar {
      height: calc(6.2rem - 3.2rem - 0.8rem);
    }

    &.about-bar {
      height: calc(10rem + 56rem + 20rem + 6.4rem + 2.2rem - 0.4rem);
    }

    &.experience-bar {
      height: calc(10rem + 20rem + 48rem + 2.2rem - 0.4rem - 0.2rem);
    }

    &.projects-bar {
      height: calc(10rem + 20rem + 144.7rem + 1rem);
    }
  }
`;

// FOR JSX STRUCTURE
// ---------------------

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  align-items: ${(props) => props.$alignItems || 'flex-start'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  gap: ${(props) => props.$gap || '0'};
  width: ${(props) => props.$width || 'auto'};
  max-width: ${(props) => props.$maxWidth || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  min-height: ${(props) => props.$minHeight || 'auto'};
  background-color: ${(props) => props.$bgColor || 'transparent'};
  position: ${(props) => props.$position || 'static'};
  padding: ${(props) => props.$padY || '0'} ${(props) => props.$padX || '0'};
  z-index: ${(props) => props.$zIndex || '0'};
`;

export const Section = styled.section`
  width: ${(props) => props.$width || 'auto'};
  max-width: ${(props) => props.$maxWidth || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  min-height: ${(props) => props.$minHeight || 'auto'};
  background-color: ${(props) => props.$bgColor || 'transparent'};
  margin-bottom: ${(props) => props.$marginBottom || '0'};

  transition: all 1.75s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100%);
  }
`;

export const HeadingsContainer = styled.header`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  align-items: ${(props) => props.$alignItems || 'flex-start'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  gap: ${(props) => props.$gap || '0'};
  font-family: var(--font-fam-sans);
  margin-bottom: ${(props) => props.$marginBottom || '10rem'};
`;

export const SectionHeading = styled.h3`
  color: ${(props) => props.$textColor || 'var(--clr-stone-200)'};
  font-size: ${(props) =>
    props.$fontSize || 'calc(var(--font-size-3xl) * 1.5)'};
  padding: ${(props) => props.$t || '0'} ${(props) => props.$r || '0'}
    ${(props) => props.$b || '0'} ${(props) => props.$l || '0'};
  letter-spacing: ${(props) => props.$ltrSpacing || '0'};
  word-spacing: ${(props) => props.$wordSpacing || '0'};

  @media screen and (max-width: 1364px) {
    font-size: var(--font-size-3xl);

    &.experience-section-title {
      font-size: calc(var(--font-size-lg) - 0.2rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-2xl);

    &.experience-section-title {
      font-size: var(--font-size-md);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--font-size-xl);

    &.experience-section-title {
      font-size: calc(var(--font-size-md) - 0.2rem);
    }
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-lg);
  }
`;

export const SectionSubheading = styled.p`
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$fontSize || 'var(--font-size-lg)'};
  line-height: 1.4;
  padding: ${(props) => props.$t || '0'} ${(props) => props.$r || '0'}
    ${(props) => props.$b || '0'} ${(props) => props.$l || '0'};
  letter-spacing: ${(props) => props.$ltrSpacing || '0'};
  word-spacing: ${(props) => props.$wordSpacing || '0'};

  @media screen and (max-width: 1364px) {
    &.experience-section-subtitle {
      font-size: calc(var(--font-size-base) - 0.2rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-md);

    &.experience-section-subtitle {
      font-size: calc(var(--font-size-base) - 0.3rem);
      letter-spacing: 0.1rem;
      word-spacing: 0.1rem;
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--font-size-base);
  }
`;

// BASIC HTML ELEMENTS
// ---------------------

export const Paragraph = styled.p`
  display: ${(props) => props.$display || 'block'};
  flex-direction: ${(props) => props.$direction || 'row'};
  align-items: ${(props) => props.$alignItems || 'flex-start'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  gap: ${(props) => props.$gap || '0'};
  width: ${(props) => props.$width || 'auto'};
  max-width: ${(props) => props.$maxWidth || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  min-height: ${(props) => props.$minHeight || 'auto'};
  color: ${(props) => props.$textColor || 'var(--clr-white)'};
  font-size: ${(props) => props.$fontSize || 'var(--font-size-base)'};
  font-weight: ${(props) => props.$fontWeight || '400'};
  letter-spacing: ${(props) => props.$ltrSpacing || '0'};
  word-spacing: ${(props) => props.$wordSpacing || '0'};

  @media screen and (max-width: 1364px) {
    &.experience-section-platform {
      font-size: calc(var(--font-size-base) - 0.1rem);
    }
  }
`;

export const Span = styled.span`
  display: ${(props) => props.$display || 'inline'};
  flex-direction: ${(props) => props.$direction || 'row'};
  align-items: ${(props) => props.$alignItems || 'flex-start'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  gap: ${(props) => props.$gap || '0'};
  width: ${(props) => props.$width || 'auto'};
  max-width: ${(props) => props.$maxWidth || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  min-height: ${(props) => props.$minHeight || 'auto'};
  color: ${(props) => props.$textColor || 'var(--clr-white)'};
  background-color: ${(props) => props.$bgColor || 'transparent'};
  font-size: ${(props) => props.$fontSize || '1.2rem'};
  font-weight: ${(props) => props.$fontWeight || '400'};
  letter-spacing: ${(props) => props.$ltrSpacing || '0'};
  word-spacing: ${(props) => props.$wordSpacing || '0'};

  @media screen and (max-width: 1364px) {
    &.experience-section-topics,
    &.experience-section-resources {
      font-size: calc(var(--font-size-base) - 0.1rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.experience-section-topics,
    &.experience-section-resources {
      font-size: calc(var(--font-size-base) - 0.2rem);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    &.experience-section-topics,
    &.experience-section-resources {
      font-size: calc(var(--font-size-base) - 0.3rem);
    }
  }
`;

export const Link = styled.a`
  outline: none;
  border: none;
  color: ${(props) => props.$textColor || 'var(--clr-white)'};
  background-color: transparent;
  font-size: ${(props) => props.$fontSize || 'var(--font-size-base)'};
  font-weight: ${(props) => props.$fontWeight || '400'};
  text-decoration: none;
  letter-spacing: 0.15rem;
  word-spacing: 0.15rem;
  cursor: pointer;

  transition: color 0.35s ease;

  &:active {
    color: ${(props) => props.$activeTextColor || 'var(--clr-white)'};
  }

  &:hover {
    color: ${(props) => props.$hoverTextColor || 'var(--clr-white)'};
  }

  &:focus-visible {
    color: ${(props) => props.$focusTextColor || 'var(--clr-white)'};
  }

  @media screen and (max-width: 1364px) {
    &.experience-section-link {
      font-size: calc(var(--font-size-base) - 0.1rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.experience-section-link {
      font-size: calc(var(--font-size-base) - 0.2rem);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    &.experience-section-link {
      font-size: calc(var(--font-size-base) - 0.3rem);
    }
  }
`;

export const CustomButton = styled.button`
  outline: ${(props) => props.$outline || 'none'};
  border: none;
  border-left: ${(props) => props.$borderLeft || 'none'};
  display: ${(props) => props.$display || 'inline-block'};
  align-items: ${(props) => props.$alignItems || 'center'};
  width: ${(props) => props.$width || 'auto'};
  color: ${(props) => props.$textColor || 'var(--clr-white)'};
  background-color: ${(props) => props.$bgColor || 'transparent'};
  font-size: ${(props) => props.$fontSize || 'var(--font-size-base)'};
  font-family: var(--font-fam-sans);
  font-weight: var(--font-weight-500);
  text-transform: capitalize;
  letter-spacing: 0.15rem;
  padding: ${(props) => props.$t || '0'} ${(props) => props.$r || '0'}
    ${(props) => props.$b || '0'} ${(props) => props.$l || '0'};
  border-radius: ${(props) => props.$brdRadius || 'none'};
  cursor: pointer;

  transition: all 0.35s ease;

  &:disabled {
    outline-color: ${(props) => props.$disableOutlineColor || 'transparent'};
    border-color: ${(props) => props.$disableBorderColor || 'none'};
    color: ${(props) => props.$disableTextColor || 'var(--clr-white)'};
    background-color: ${(props) => props.$disableBgColor || 'transparent'};
    cursor: not-allowed;
  }

  &:hover:disabled {
    outline-color: ${(props) => props.$disableOutlineColor || 'transparent'};
    border-color: ${(props) => props.$disableBorderColor || 'none'};
    color: ${(props) => props.$disableTextColor || 'var(--clr-white)'};
    background-color: ${(props) => props.$disableBgColor || 'transparent'};
  }

  &:hover {
    outline-color: ${(props) => props.$hoverOutlineColor || 'transparent'};
    border-color: ${(props) => props.$hoverBorderColor || 'none'};
    color: ${(props) => props.$hoverTextColor || 'var(--clr-white)'};
    background-color: ${(props) => props.$hoverBgColor || 'transparent'};
  }

  &:focus-visible {
  }
`;

export const Image = styled.img`
  display: block;
  width: ${(props) => props.$width || 'auto'};
  max-width: ${(props) => props.$maxWidth || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  min-height: ${(props) => props.$minHeight || 'auto'};
  filter: ${(props) => props.$filter || 'none'};
  transition: all 0.5s ease;

  @media screen and (max-width: 1364px) {
    &.projects-section-image {
      width: 48rem;
      height: 24rem;
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.projects-section-image {
      width: 44rem;
      height: 20rem;
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    &.projects-section-image {
      width: 40rem;
      height: 20rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.projects-section-image {
      width: 32rem;
      height: 16rem;
    }
  }
`;
