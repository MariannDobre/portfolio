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

  @media screen and (max-width: 1364px) {
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
  }

  @media screen and (max-width: 480px) {
  }
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
  border-radius: 8px !important;
  margin: ${(props) => props.$y || '0'} ${(props) => props.$x || '0'};

  @media screen and (max-width: 1364px) {
    &.intro-bar {
      height: calc(7.4rem - (2 * 1.6rem) - 2.2rem - 1.2rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.intro-bar {
      height: calc(6.8rem - (2 * 1.6rem) - 2rem - 1rem);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    &.intro-bar {
      height: calc(6.2rem - (2 * 1.6rem) - 1.8rem - 0.8rem);
    }
  }

  @media screen and (max-width: 480px) {
    &.intro-bar {
      height: calc(5.6rem - (2 * 1.6rem) - 1.6rem);
      background: var(--clr-violet-400);
    }
  }
`;

// FOR JSX STRUCTURE
// ---------------------

export const Div = styled.div`
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

  @media screen and (max-width: 1364px) {
    &.progress-content {
      gap: 1.8rem;
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.progress-content {
      gap: 1.6rem;
    }

    /* ABOUT SECTION */
    &.about-content {
      gap: 1.6rem;
    }

    &.about-files-container {
      gap: 1.2rem;
    }

    /* PROJECTS SECTION */
    &.project-wrapper {
      max-width: 60rem;
      gap: 4rem;
    }

    &.project-details-container {
      max-width: 60rem;
      height: 20rem;
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    &.progress-content {
      gap: 1.4rem;
    }

    /* ABOUT SECTION */
    &.about-content {
      gap: 1.4rem;
    }

    &.about-files-container {
      gap: 0.8rem;
    }

    /* PROJECTS SECTION */
    &.project-wrapper {
      max-width: 44rem;
    }

    &.project-details-container {
      max-width: 44rem;
      height: 28rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.progress-content {
      gap: 1.2rem;
    }

    /* ABOUT SECTION */
    &.about-content {
      gap: 1.2rem;
    }

    &.about-files-container {
      gap: 0.4rem;
    }

    /* PROJECTS SECTION */
    &.project-wrapper {
      max-width: 36rem;
    }

    &.project-details-container {
      max-width: 36rem;
      height: 20rem;
    }
  }

  @media screen and (max-width: 400px) {
    &.project-wrapper {
      max-width: 32rem;
    }

    &.project-details-container {
      max-width: 32rem;
      height: 20rem;
    }
  }
`;

export const Section = styled.section`
  width: ${(props) => props.$width || 'auto'};
  max-width: ${(props) => props.$maxWidth || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  min-height: ${(props) => props.$minHeight || 'auto'};
  background-color: ${(props) => props.$bgColor || 'transparent'};
  margin-bottom: ${(props) => props.$marginBottom || '0'};

  @media screen and (max-width: 1364px) {
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

// BASIC HTML ELEMENTS
// ---------------------

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
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.exp-tab-content-span {
      font-size: calc(var(--font-size-base) - 0.3rem);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    &.exp-tab-content-span {
      font-size: var(--font-size-sm);
    }
  }

  @media screen and (max-width: 480px) {
  }
`;

export const Link = styled.a`
  outline: none;
  border: none;
  width: ${(props) => props.$width || 'auto'};
  color: ${(props) => props.$textColor || 'var(--clr-white)'};
  background-color: transparent;
  font-size: ${(props) => props.$fontSize || 'var(--font-size-base)'};
  font-weight: ${(props) => props.$fontWeight || '400'};
  text-decoration: none;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
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
    &.github-link,
    &.project-link {
      font-size: calc(var(--font-size-md) - 0.2rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.exp-tab-content-link {
      font-size: calc(var(--font-size-base) - 0.3rem);
    }

    &.github-link,
    &.project-link {
      font-size: var(--font-size-base);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    &.exp-tab-content-link {
      font-size: var(--font-size-sm);
    }

    &.github-link,
    &.project-link {
      font-size: calc(var(--font-size-base) - 0.2rem);
    }
  }

  @media screen and (max-width: 480px) {
    &.github-link,
    &.project-link {
      font-size: var(--font-size-sm);
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
  letter-spacing: 0.1rem;
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
    outline-color: ${(props) => props.$focusOutlineColor || 'transparent'};
    border-color: ${(props) => props.$focusBorderColor || 'none'};
    color: ${(props) => props.$focusTextColor || 'var(--clr-white)'};
    background-color: ${(props) => props.$focusBgColor || 'transparent'};
  }

  @media screen and (max-width: 1364px) {
    &.exp-tab-selector-btn {
      width: 18rem;
      font-size: calc(var(--font-size-base) - 0.1rem);
      padding: 1.4rem 0 1.4rem 1.8rem;
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.exp-tab-selector-btn {
      width: 16rem;
      font-size: calc(var(--font-size-base) - 0.2rem);
      padding: 1.2rem 0 1.2rem 1.6rem;
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    &.exp-tab-selector-btn {
      width: 14rem;
      font-size: calc(var(--font-size-base) - 0.3rem);
      padding: 1rem 0 1rem 1.4rem;
    }

    &.contact-section-submitBtn {
      font-size: calc(var(--font-size-base) - 0.1rem);
      letter-spacing: 0.1rem;
      word-spacing: 0.1rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.exp-tab-selector-btn {
      width: 12rem;
      font-size: var(--font-size-sm);
      padding: 0.8rem 0 0.8rem 1.2rem;
    }

    &.contact-section-submitBtn {
      font-size: calc(var(--font-size-base) - 0.2rem);
    }
  }

  @media screen and (max-width: 400px) {
    &.contact-section-submitBtn {
      font-size: calc(var(--font-size-base) - 0.3rem);
    }
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
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    &.project-image {
      max-width: 60rem;
      height: 32rem;
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664px) {
    &.project-image {
      max-width: 44rem;
      height: 28rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.project-image {
      max-width: 36rem;
      height: 20rem;
    }
  }

  @media screen and (max-width: 400px) {
    &.project-image {
      max-width: 32rem;
      height: 20rem;
    }
  }
`;
