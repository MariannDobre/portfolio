import React from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import { SiReact, SiSupabase } from 'react-icons/si';
import styled from 'styled-components';

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
        {headerData.map((data, index) => (
          <Row key={index}>
            <RowIndex>{index + 1}</RowIndex>
            <RowBody>{data.rowData}</RowBody>
          </Row>
        ))}
      </FileContent>
    </>
  );
}

export default Files;
