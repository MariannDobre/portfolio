import React from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { SiReact, SiSupabase } from 'react-icons/si';
import styled from 'styled-components';

const FilesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    gap: 0.4rem;
  }
`;

const File = styled.button`
  --clr-active: rgb(99, 99, 107);
  --padding: 0.6rem 1.6rem;
  --padding-laptop: 0.4rem 1.2rem;
  --padding-tablet: 0.3rem 1rem;
  --rounded: 0.6rem;

  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: var(--bg-clr-contrast);
  background-color: transparent;
  font-size: calc(var(--font-size-base) - 0.2rem);
  font-family: var(--font-fam-sans);
  padding: var(--padding);
  border-radius: var(--rounded);

  svg {
    color: var(--clr-stone-400);
    font-size: var(--font-size-base);
  }

  &.currentFile {
    color: var(--clr-stone-200);
    background-color: rgba(99, 99, 107, 0.3);

    svg {
      color: var(--clr-sky-600);
    }
  }

  &:focus {
    outline: none;
    border: none;
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: calc(var(--font-size-base) - 0.3rem);
    padding: var(--padding-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--font-size-sm);
    padding: var(--padding-tablet);
  }
`;

const FileContent = styled.p`
  --width: 100%;

  color: var(--clr-stone-200);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  line-height: 1.3;
  width: var(--width);
  max-width: var(--width);
  height: auto;

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: calc(var(--font-size-base) - 0.1rem);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: calc(var(--font-size-base) - 0.2rem);
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`;

function Files() {
  return (
    <>
      <FilesContainer>
        <File className='currentFile'>
          <IoMdInformationCircle />
          README.md
        </File>

        <File>
          <SiReact />
          App.jsx
        </File>

        <File>
          <SiSupabase />
          Supabase.js
        </File>
      </FilesContainer>

      <FileContent>
        What's up mate, my name is Marian.
        <br />
        <br />
        I just try to build cute and nice things for the web.
        <br />
        <br />
        I also want to be a software enginner (or maybe i already am, who
        knows), specializing
        <br />
        in building complex user interfaces.
        <br />
        <br />
        My current focus is on honing my skills in React while seeking
        opportunities that not
        <br />
        only allow me to grow professionally but also enrich me personally.
        <br />
        <br />
        Take a scroll through my work and see what a year of self directed
        learning has brought.
        <br />
        Every feature, every line of code - all crafted by me, without the
        traditional classroom setting.
        <br />
        <br />
        Let's continue this journey below.
      </FileContent>
    </>
  );
}

export default Files;
