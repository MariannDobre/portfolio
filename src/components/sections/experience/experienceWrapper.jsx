import React from 'react';
import { Section } from '../../../interface/styledComponents';
import Experience from './experience';
import SectionHeadings from '../../../interface/sectionHeadings';
import SectionContent from '../../../interface/sectionContent';

function ExperienceWrapper({
  sectionIndex,
  setSectionIndex,
  measureRef,
  intersectionRef,
  inView,
}) {
  return (
    <Section
      ref={(element) => {
        measureRef.current = element;
        intersectionRef(element);
      }}
      className={inView ? 'section-visible' : 'section-hidden'}
      $width='100%'
      $maxWidth='100%'
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

export default ExperienceWrapper;
