import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const STooltip = styled.div`
  position: relative;
  display: inline-block;

  span {
    --padding: 0.6rem 1.2rem;
    --margin: 0.4rem;
    --rounded: 0.4rem;

    outline: none;
    border: 0.1rem solid var(--clr-stone-200);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: var(--bg-clr-main);
    color: var(--clr-stone-200);
    font-size: calc(var(--font-size-base) - 0.2rem);
    font-weight: var(--font-weight-500);
    font-family: var(--font-fam-sans);
    text-align: center;
    white-space: nowrap;
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;
    border-radius: var(--rounded);
    padding: var(--padding);
    margin-top: var(--margin);

    @media screen and (max-width: 1024px) {
      font-size: var(--font-size-sm);
      letter-spacing: normal;
      word-spacing: normal;
    }
  }
`;

function Tooltip({ children, text }) {
  const tooltip = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    function handleMouseOver(event) {
      const { left } = tooltip?.current?.getBoundingClientRect();
      const x = event.clientX - left;
      const y = tooltip?.current?.offsetHeight;

      setTooltipPosition({ top: y, left: x });
    }

    if (showTooltip) {
      window.addEventListener('mousemove', handleMouseOver);
    } else {
      window.removeEventListener('mousemove', handleMouseOver);
    }

    return () => window.removeEventListener('mousemove', handleMouseOver);
  }, [showTooltip]);

  return (
    <STooltip
      ref={tooltip}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <span
          style={{
            top: tooltipPosition.top + 'px',
            left: tooltipPosition.left + 'px',
          }}
        >
          {text}
        </span>
      )}
    </STooltip>
  );
}

export default Tooltip;
