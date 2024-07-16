import React from 'react';
import styled from 'styled-components';
import Tooltip from '../../interface/tooltip';

const items = [
  { id: 1, label: 'about', path: '#' },
  { id: 2, label: 'experience', path: '#' },
  { id: 3, label: 'work', path: '#' },
  { id: 4, label: 'contact', path: '#' },
];

const SNavWrapper = styled.div`
  --width: 100%;
  --max-width: 100vw;
  --padding: 2.8rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: var(--width);
  max-width: var(--max-width);
  padding: var(--padding);
  z-index: 100;
`;

const SNavContainer = styled.div`
  --width: 100%;
  --max-width: 128rem;

  width: var(--width);
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SNav = styled.nav``;

const SNavList = styled.ul`
  --width: 100%;
  --max-width: 128rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.6rem;
  width: var(--width);
  max-width: var(--max-width);
  list-style: none;
`;

const SNavItem = styled.li`
  --height: 2.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--height);
`;

const SNavLink = styled.a`
  --ltr-spacing-link: 0.1rem;
  --padding: 0.3rem;

  color: var(--clr-stone-300);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-500);
  font-family: var(--font-fam-serif);
  text-transform: capitalize;
  text-decoration: none;
  letter-spacing: var(--ltr-spacing-link);
  position: relative;
  padding-bottom: var(--padding);
  transition: all 0.35s ease;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.2rem;
    background-color: var(--clr-stone-100);
    transition: all 0.35s ease;
  }

  &:hover {
    color: var(--clr-stone-100);
    text-shadow: currentColor 0.2rem 0 1.2rem;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Resume = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    --height: auto;
    --padding: 0.8rem 2.8rem;
    --ltr-spacing-btn: 0.1rem;
    --rounded: 0.4rem;

    outline: none;
    border: 0.1rem solid var(--clr-sky-600);
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--height);
    padding: var(--padding);
    color: var(--clr-stone-300);
    background-color: transparent;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-500);
    font-family: var(--font-fam-serif);
    text-transform: capitalize;
    letter-spacing: var(--ltr-spacing-btn);
    border-radius: var(--rounded);
    cursor: pointer;
    transition: all 0.35s ease;
    position: relative;

    &:hover {
      color: var(--clr-stone-100);
      text-shadow: currentColor 0.2rem 0 1.2rem;
      border-color: var(--clr-sky-500);
      box-shadow: 0 0 2rem 0.4rem rgba(14, 165, 233, 0.35);
    }
  }
`;

function Nav() {
  return (
    <SNavWrapper>
      <SNavContainer>
        <SNav>
          <SNavList>
            {items.map((item, index) => (
              <SNavItem key={item.id}>
                <SNavLink href={item.path}>{item.label}</SNavLink>
              </SNavItem>
            ))}
          </SNavList>
        </SNav>

        <Tooltip text='Download resume.pdf'>
          <Resume>
            <button>resume</button>
          </Resume>
        </Tooltip>
      </SNavContainer>
    </SNavWrapper>
  );
}

export default Nav;
