import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Div, Section } from './interface/styledComponents';
import { useSectionHeight } from './hooks/useSectionHeight';
import Progress from './components/progress/progress';
import AboutWrapper from './components/sections/about/aboutWrapper';
import ExperienceWrapper from './components/sections/experience/experienceWrapper';
import ProjectsWrapper from './components/sections/projects/projectsWrapper';
import ContactWrapper from './components/sections/contact/contactWrapper';

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
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

  return (
    <>
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
