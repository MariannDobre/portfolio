import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import Header from './components/header/header';
import Progress from './components/progress/progress';
import Experience from './components/sections//experience/experience';
import Projects from './components/sections/projects/projects';
import Contact from './components/sections/contact/contact';

// app layout
const SAppWrapper = styled.div`
  --max-width: 128rem;
  --padding: 12rem 2rem 20rem 4rem;

  display: flex;
  gap: 1.2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--padding);

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    padding: 12rem 2rem 20rem 2rem;
  }
`;

const SAppMain = styled.div`
  --width: 116rem;

  width: var(--width);
`;

// progress bars on scrolling between sections
const ProgressContainer = styled.div`
  --width: calc(12rem - 1.2rem);

  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: var(--width);
`;

function App() {
  return (
    <>
      <SAppWrapper>
        <ProgressContainer>
          <Progress />
        </ProgressContainer>

        <SAppMain>
          <Header />

          <Experience />

          <Projects />

          <Contact />
        </SAppMain>
      </SAppWrapper>

      <Toaster
        position='top-center'
        gutter={12}
        toastOptions={{
          success: {
            duration: 3750,
          },
          error: {
            duration: 5000,
          },
          style: {
            maxWidth: '64rem',
            color: 'var(--clr-stone-200)',
            backgroundColor: 'var(--bg-clr-secondary)',
            fontSize: 'var(--font-size-base)',
            fontFamily: 'var(--font-fam-sans)',
            textAlign: 'center',
            letterSpacing: '0.1rem',
            wordSpacing: '0.1rem',
            padding: '1.6rem 2.4rem',
            borderRadius: '0.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
