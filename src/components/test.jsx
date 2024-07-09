import React, { useState } from 'react';
import styled from 'styled-components';

const buttons = [
  { id: 1, label: 'experience', value: 'experience' },
  { id: 2, label: 'work', value: 'work' },
  { id: 3, label: 'course', value: 'course' },
];

const content = [
  { id: 1, value: 'experience', heading: 'How i get my current experience' },
  { id: 2, value: 'work', heading: "What i've worked" },
  { id: 3, value: 'course', heading: "What course i've followed" },
];

const STest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60rem;
  background-color: gray;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  align-items: flex-start;
  outline: none;
  border: none;
  border-left: 0.2rem solid black;
  width: 16rem;
  background-color: transparent;
  color: black;
  font-size: 1.6rem;
  padding: 1.2rem 0 1.2rem 2rem;
  text-transform: capitalize;
  cursor: pointer;

  transition: all 0.35s ease;

  &:hover {
    background-color: rgba(20, 184, 166, 0.15);
  }
`;

function Test() {
  const [buttonValue, setButtonValue] = useState('experience');

  return (
    <STest>
      <ButtonsContainer>
        {buttons.map((button) => (
          <Button
            key={button.id}
            style={{
              color: buttonValue === button.value ? '#14b8a6' : '',
              borderLeftColor: buttonValue === button.value ? '#14b8a6' : '',
            }}
            onClick={() => setButtonValue(button.value)}
          >
            {button.label}
          </Button>
        ))}
      </ButtonsContainer>

      <div>
        {content.map((data) => (
          <div key={data.id}>
            <h3
              style={{
                color: buttonValue === data.value ? '#14b8a6' : '',
              }}
            >
              {buttonValue === data.value && data.heading}
            </h3>
          </div>
        ))}
      </div>
    </STest>
  );
}

export default Test;
