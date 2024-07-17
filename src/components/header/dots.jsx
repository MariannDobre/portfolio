import React from 'react';
import styled from 'styled-components';

const SDots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Dot = styled.span`
  --dot-width: 1.2rem;
  --dot-height: 1.2rem;
  --rounded: 50%;

  display: block;
  width: var(--dot-width);
  height: var(--dot-height);
  background-color: var(--bg-clr-contrast);
  border-radius: var(--rounded);
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
