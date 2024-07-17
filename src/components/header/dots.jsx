import React from 'react';
import styled from 'styled-components';

const SDots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    gap: 0.6rem;
  }
`;

const Dot = styled.span`
  --dot-dimension: 1.2rem;
  --dot-dimension-laptop: 1rem;
  --rounded: 50%;

  display: block;
  width: var(--dot-dimension);
  height: var(--dot-dimension);
  background-color: var(--bg-clr-contrast);
  border-radius: var(--rounded);

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    width: var(--dot-dimension-laptop);
    height: var(--dot-dimension-laptop);
  }
`;

function Dots() {
  return (
    <SDots>
      {Array.from({ length: 3 }, (_, index) => (
        <Dot key={index} />
      ))}
    </SDots>
  );
}

export default Dots;
