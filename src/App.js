import styled from 'styled-components';
import Nav from './components/header/nav';
import Header from './components/header/header';
import Progress from './components/progress/progress';
import Experience from './components/sections//experience/experience';
import Projects from './components/sections/projects/projects';

// app layout
const SAppWrapper = styled.div`
  --max-width: 128rem;
  --padding: 20rem 0 0 0;

  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--padding);
`;

const SAppMain = styled.div`
  --width: 116rem;

  width: var(--width);
`;

// app components
const HeadingsContainer = styled.div`
  --margin: 10rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-family: var(--font-fam-sans);
  margin-bottom: var(--margin);
`;

const SAppHeading = styled.h3`
  color: var(--clr-stone-200);
  font-size: calc(var(--font-size-3xl) * 2);
`;

const SAppSubheading = styled.p`
  color: var(--clr-violet-400);
  font-size: var(--font-size-lg);
`;

// progress bars on scrolling between sections
const ProgressContainer = styled.div`
  --width: 12rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: var(--width);
`;

function App() {
  return (
    <>
      <Nav />

      <SAppWrapper>
        <ProgressContainer>
          <Progress />
        </ProgressContainer>

        <SAppMain>
          <HeadingsContainer>
            <SAppHeading>Let's start from here</SAppHeading>

            <SAppSubheading>About Me</SAppSubheading>
          </HeadingsContainer>

          <Header />

          <Experience />

          <Projects />
        </SAppMain>
      </SAppWrapper>
    </>
  );
}

export default App;
