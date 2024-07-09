import styled from 'styled-components';

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
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background: ${(props) => props.$background};
  margin: ${(props) => props.$y} ${(props) => props.$x};
`;

Bar.defaultProps = {
  $width: 'auto',
  $height: 'auto',
  $background: 'transparent',
  $y: '0',
  $x: '0',
};
