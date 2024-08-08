import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Div, Section } from './interface/styledComponents';
import { useSectionHeight } from './hooks/useSectionHeight';
import Progress from './components/progress/progress';
import AboutWrapper from './components/sections/about/aboutWrapper';
import ExperienceWrapper from './components/sections/experience/experienceWrapper';
import ProjectsWrapper from './components/sections/projects/projectsWrapper';
import ContactWrapper from './components/sections/contact/contactWrapper';
import styled from 'styled-components';

const StyledPopup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const PopupOverlay = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1.2rem);
`;

const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 3.6rem;
  background-color: var(--bg-clr-main);
  outline: 0.2rem solid var(--clr-stone-200);
`;

const PopupMessage = styled.p`
  color: var(--clr-stone-200);
  font-size: calc(var(--font-size-base) + 0.1rem);
  font-family: var(--font-fam-sans);
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;

  @media screen and (max-width: 1024px) {
    font-size: var(--font-size-base);
  }

  @media screen and (max-width: 768px) {
    font-size: calc(var(--font-size-base) - 0.1rem);
    line-height: 1.4;
  }

  @media screen and (max-width: 480px) {
    font-size: calc(var(--font-size-base) - 0.2rem);
  }
`;

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [loadingMeasure, setLoadingMeasure] = useState(true);
  const {
    measureRef: aboutMeasureRef,
    sectionHeight: aboutSectionHeight,
    intersectionRef: aboutSectionRef,
    inView: isAboutSectionInView,
  } = useSectionHeight({ optionalTabIndex: null });
  const {
    measureRef: expMeasureRef,
    sectionHeight: expSectionHeight,
    intersectionRef: expSectionRef,
    inView: isExpSectionInView,
  } = useSectionHeight({ optionalTabIndex: sectionIndex });
  const {
    measureRef: projectsMeasureRef,
    sectionHeight: projectsSectionHeight,
    intersectionRef: projectsSectionRef,
    inView: isProjectsSectionInView,
  } = useSectionHeight({ optionalTabIndex: null });
  const {
    measureRef: contactMeasureRef,
    sectionHeight: contactSectionHeight,
    intersectionRef: contactSectionRef,
    inView: isContactSectionInView,
  } = useSectionHeight({ optionalTabIndex: null });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingMeasure(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loadingMeasure && <Popup />}

      <Section
        $width='100%'
        $maxWidth='100%'
        $minHeight='auto'
      >
        <Div
          className='progress-content'
          $gap='4rem'
        >
          <Progress
            sectionsHeights={[
              aboutSectionHeight,
              expSectionHeight,
              projectsSectionHeight,
              contactSectionHeight,
            ]}
          />

          <Div
            $direction='column'
            $gap='20rem'
            $width='100%'
            $maxWidth='100%'
            $minHeight='auto'
          >
            <AboutWrapper
              measureRef={aboutMeasureRef}
              intersectionRef={aboutSectionRef}
              inView={isAboutSectionInView}
            />

            <ExperienceWrapper
              sectionIndex={sectionIndex}
              setSectionIndex={setSectionIndex}
              measureRef={expMeasureRef}
              intersectionRef={expSectionRef}
              inView={isExpSectionInView}
            />

            <ProjectsWrapper
              measureRef={projectsMeasureRef}
              intersectionRef={projectsSectionRef}
              inView={isProjectsSectionInView}
            />

            <ContactWrapper
              measureRef={contactMeasureRef}
              intersectionRef={contactSectionRef}
              inView={isContactSectionInView}
            />
          </Div>
        </Div>
      </Section>

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

function Popup() {
  return (
    <StyledPopup>
      <PopupOverlay>
        <PopupContainer>
          <PopupMessage>
            We're measuring and adjusting the layout to make sure everything
            looks great. Hang tight, it will be ready shortly.
          </PopupMessage>
        </PopupContainer>
      </PopupOverlay>
    </StyledPopup>
  );
}
