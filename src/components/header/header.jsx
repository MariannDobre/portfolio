import React from 'react';
import styled from 'styled-components';
import { Blur } from '../../interface/styledComponents';

import { IoMdInformationCircle } from 'react-icons/io';
import { SiReact, SiSupabase } from 'react-icons/si';
import { VscFiles } from 'react-icons/vsc';
import { VscSearch } from 'react-icons/vsc';
import { IoIosGitBranch } from 'react-icons/io';
import { VscDebugAlt } from 'react-icons/vsc';
import { VscExtensions } from 'react-icons/vsc';

const headerData = [
  { rowData: `What's up mate, my name is Alex.` },
  { rowData: '' },
  { rowData: 'I just try to build cute and nice things for the web.' },
  {
    rowData:
      'I want to be a software enginner (or maybe i already am, who knows),',
  },
  { rowData: 'specializing in building complex user interfaces.' },
  { rowData: '' },
  {
    rowData:
      'My current focus is on honing my skills in React while seeking opportunities',
  },
  {
    rowData:
      'that not only allow me to grow professionally but also enrich me personally.',
  },
  { rowData: '' },
  {
    rowData:
      'Take a scroll through my work and see what a year of self directed learning has brought.',
  },
  { rowData: 'Every feature, every line of code - all crafted by me,' },
  { rowData: 'without the traditional classroom setting.' },
  { rowData: '' },
  { rowData: `Let's continue this journey below.` },
  { rowData: '' },
  { rowData: '' },
];

const SHeader = styled.header`
  --max-width: 116rem;
  --height: 56rem;
  --padding: 1.6rem;
  --margin: 20rem;
  --rounded: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
  max-width: var(--max-width);
  height: var(--height);
  background-color: var(--bg-clr-secondary);
  padding: var(--padding);
  margin-bottom: var(--margin);
  border: 0.1rem solid var(--bg-clr-contrast);
  border-radius: var(--rounded);
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Dots = styled.span`
  --dot-width: 1.2rem;
  --dot-height: 1.2rem;
  --rounded: 50%;

  display: block;
  width: var(--dot-width);
  height: var(--dot-height);
  background-color: var(--bg-clr-contrast);
  border-radius: var(--rounded);
`;

const SHeaderContent = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const Branch = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--bg-clr-contrast);
  font-size: calc(var(--font-size-sm) + 0.2rem);
  font-family: var(--font-fam-sans);
  margin-top: auto;

  svg {
    font-size: var(--font-size-base);
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Feature = styled.span`
  --feature-width: 2.8rem;
  --feature-height: 2.8rem;

  position: relative;
  width: var(--feature-width);
  height: var(--feature-height);

  svg {
    color: var(--bg-clr-contrast);
    width: var(--feature-width);
    height: var(--feature-height);
  }

  &.active {
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 0.2rem;
      height: 100%;
      background-color: var(--clr-white);
      left: -60%;
    }

    svg {
      color: var(--clr-white) !important;
    }
  }
`;

const SHeaderBody = styled.div`
  --width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: var(--width);
`;

const FilesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const File = styled.button`
  --clr-active: rgb(99, 99, 107);
  --padding: 0.6rem 1.6rem;
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
`;

const FileContent = styled.div`
  --width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  width: var(--width);
  height: auto;
`;

const Row = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const RowIndex = styled.span`
  --width: 2rem;
  --height: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--bg-clr-contrast);
  width: var(--width);
  height: var(--height);
`;

const RowBody = styled.p`
  display: flex;
  align-items: center;
  color: var(--clr-stone-200);
  line-height: 1;
`;

function Header() {
  return (
    <SHeader>
      <DotsContainer>
        {Array.from({ length: 3 }, (_, index) => (
          <Dots key={index} />
        ))}
      </DotsContainer>

      <SHeaderContent>
        <FeaturesContainer>
          <Feature className='active'>
            <VscFiles />
          </Feature>

          <Feature>
            <VscSearch />
          </Feature>

          <Feature>
            <IoIosGitBranch />
          </Feature>

          <Feature>
            <VscDebugAlt />
          </Feature>

          <Feature>
            <VscExtensions />
          </Feature>
        </FeaturesContainer>

        <SHeaderBody>
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
            {headerData.map((data, index) => (
              <Row key={index}>
                <RowIndex>{index + 1}</RowIndex>
                <RowBody>{data.rowData}</RowBody>
              </Row>
            ))}
          </FileContent>
        </SHeaderBody>
      </SHeaderContent>

      <Branch>
        <IoIosGitBranch />
        main
      </Branch>

      <Blur
        $top='6rem'
        $left='2rem'
        $blurRadius='16rem'
        $spreadRadius='8rem'
        $shadowColor='var(--clr-sky-600)'
        $zIndex='-1'
      />

      <Blur
        $top='52rem'
        $right='4rem'
        $blurRadius='16rem'
        $spreadRadius='8rem'
        $shadowColor='var(--clr-violet-600)'
        $zIndex='-1'
      />
    </SHeader>
  );
}

export default Header;
