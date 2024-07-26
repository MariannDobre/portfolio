import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Div, Section } from '../interface/styledComponents';
import Progress from './progress/progress';
import About from './sections/about/about';
import Experience from './sections/experience/experience';
import SectionHeadings from '../interface/sectionHeadings';
import Projects from './sections/projects/projects';
import ContactForm from './sections/contact/contactForm';

function Test() {
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <Section
      $width='100%'
      $maxWidth='100%'
      $minHeight='400rem'
      $bgColor='var(--bg-clr-secondary)'
    >
      <Div
        className='progress-content'
        $gap='2rem'
      >
        <Progress sectionIndex={sectionIndex} />

        <Div
          $direction='column'
          // $justifyContent='space-between'
          $gap='20rem'
          $width='100%'
          $maxWidth='100%'
          $minHeight='360rem'
          $bgColor='blue'
        >
          <AboutTest />
          <ExperienceTest
            sectionIndex={sectionIndex}
            setSectionIndex={setSectionIndex}
          />
          <ProjectsTest />
          <ContactTest />
        </Div>
      </Div>
    </Section>
  );
}

// SECTION1 TEST COMPONENTS
function AboutTest() {
  const { ref: aboutSectionRef, inView } = useInView();

  return (
    <Section
      ref={aboutSectionRef}
      className={inView ? 'section-visible' : 'section-hidden'}
      $width='100%'
      $maxWidth='100%'
    >
      <SectionHeadings
        title="Let's start from here"
        subtitle='About me'
        subtitleTextColor='var(--clr-violet-600)'
      />

      <SectionContent componentToRender={<About />} />
    </Section>
  );
}

// SECTION2 TEST COMPONENTS
function ExperienceTest({ sectionIndex, setSectionIndex }) {
  const { ref: expSectionRef, inView } = useInView();

  return (
    <Section
      ref={expSectionRef}
      className={inView ? 'section-visible' : 'section-hidden'}
      $width='100%'
      $maxWidth='100%'
      $bgColor='orange'
    >
      <SectionHeadings
        title='A journey of self - discovery'
        subtitle='Experience'
        subtitleTextColor='var(--clr-emerald-600)'
      />

      <SectionContent
        componentToRender={
          <Experience
            sectionIndex={sectionIndex}
            setSectionIndex={setSectionIndex}
          />
        }
      />
    </Section>
  );
}

// SECTION3 TEST COMPONENTS
function ProjectsTest() {
  const { ref: projectsSectionRef, inView } = useInView();

  return (
    <Section
      ref={projectsSectionRef}
      className={inView ? 'section-visible' : 'section-hidden'}
      $width='100%'
      $maxWidth='100%'
      $bgColor='orange'
    >
      <SectionHeadings
        title='Where the work pays off'
        subtitle='Projects'
        subtitleTextColor='var(--clr-orange-400)'
      />

      <SectionContent componentToRender={<Projects />} />
    </Section>
  );
}

// SECTION4 TEST COMPONENTS
function ContactTest() {
  const { ref: contactSectionRef, inView } = useInView();

  return (
    <Section
      ref={contactSectionRef}
      className={inView ? 'section-visible' : 'section-hidden'}
      $width='100%'
      $maxWidth='100%'
      $bgColor='orange'
    >
      <SectionHeadings
        title='Say hello'
        subtitle='Contact'
        subtitleTextColor='var(--clr-rose-400)'
      />

      <SectionContent componentToRender={<ContactForm />} />
    </Section>
  );
}

//

function SectionContent({ componentToRender }) {
  return <React.Fragment>{componentToRender}</React.Fragment>;
}

export default Test;
