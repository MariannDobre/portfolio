// import React, { useState } from 'react';
// import { Div, Section } from '../interface/styledComponents';
// import Progress from './progress/progress';
// import About from './sections/about/about';
// import Experience from './sections/experience/experience';
// import SectionHeadings from '../interface/sectionHeadings';
// import Projects from './sections/projects/projects';
// import ContactForm from './sections/contact/contactForm';
// import useSectionHeight from '../hooks/useSectionHeight';

// function Test() {
//   const [sectionIndex, setSectionIndex] = useState(0);
//   const {
//     measureRef: aboutMeasureRef,
//     sectionHeight: aboutSectionHeight,
//     intersectionRef: aboutSectionRef,
//     inView: isAboutSectionInView,
//   } = useSectionHeight({ optionalTabIndex: null });
//   const {
//     measureRef: expMeasureRef,
//     sectionHeight: expSectionHeight,
//     intersectionRef: expSectionRef,
//     inView: isExpSectionInView,
//   } = useSectionHeight({ optionalTabIndex: sectionIndex });
//   const {
//     measureRef: projectsMeasureRef,
//     sectionHeight: projectsSectionHeight,
//     intersectionRef: projectsSectionRef,
//     inView: isProjectsSectionInView,
//   } = useSectionHeight({ optionalTabIndex: null });
//   const {
//     measureRef: contactMeasureRef,
//     sectionHeight: contactSectionHeight,
//     intersectionRef: contactSectionRef,
//     inView: isContactSectionInView,
//   } = useSectionHeight({ optionalTabIndex: null });

//   return (
//     <Section
//       $width='100%'
//       $maxWidth='100%'
//       $minHeight='auto'
//     >
//       <Div
//         className='progress-content'
//         $gap='4rem'
//       >
//         <Progress
//           sectionsHeights={[
//             aboutSectionHeight,
//             expSectionHeight,
//             projectsSectionHeight,
//             contactSectionHeight,
//           ]}
//         />

//         <Div
//           $direction='column'
//           $gap='20rem'
//           $width='100%'
//           $maxWidth='100%'
//           $minHeight='auto'
//         >
//           <AboutTest
//             measureRef={aboutMeasureRef}
//             intersectionRef={aboutSectionRef}
//             inView={isAboutSectionInView}
//           />

//           <ExperienceTest
//             sectionIndex={sectionIndex}
//             setSectionIndex={setSectionIndex}
//             measureRef={expMeasureRef}
//             intersectionRef={expSectionRef}
//             inView={isExpSectionInView}
//           />

//           <ProjectsTest
//             measureRef={projectsMeasureRef}
//             intersectionRef={projectsSectionRef}
//             inView={isProjectsSectionInView}
//           />

//           <ContactTest
//             measureRef={contactMeasureRef}
//             intersectionRef={contactSectionRef}
//             inView={isContactSectionInView}
//           />
//         </Div>
//       </Div>
//     </Section>
//   );
// }

// // SECTION1 TEST COMPONENTS
// function AboutTest({ measureRef, intersectionRef, inView }) {
//   return (
//     <Section
//       ref={(element) => {
//         measureRef.current = element;
//         intersectionRef(element);
//       }}
//       className={inView ? 'section-visible' : 'section-hidden'}
//       $width='100%'
//       $maxWidth='100%'
//     >
//       <SectionHeadings
//         title="Let's start from here"
//         subtitle='About me'
//         subtitleTextColor='var(--clr-violet-400)'
//       />

//       <SectionContent componentToRender={<About />} />
//     </Section>
//   );
// }

// // SECTION2 TEST COMPONENTS
// function ExperienceTest({
//   sectionIndex,
//   setSectionIndex,
//   measureRef,
//   intersectionRef,
//   inView,
// }) {
//   return (
//     <Section
//       ref={(element) => {
//         measureRef.current = element;
//         intersectionRef(element);
//       }}
//       className={inView ? 'section-visible' : 'section-hidden'}
//       $width='100%'
//       $maxWidth='100%'
//     >
//       <SectionHeadings
//         title='A journey of self - discovery'
//         subtitle='Experience'
//         subtitleTextColor='var(--clr-emerald-600)'
//       />

//       <SectionContent
//         componentToRender={
//           <Experience
//             sectionIndex={sectionIndex}
//             setSectionIndex={setSectionIndex}
//           />
//         }
//       />
//     </Section>
//   );
// }

// // SECTION3 TEST COMPONENTS
// function ProjectsTest({ measureRef, intersectionRef, inView }) {
//   return (
//     <Section
//       ref={(element) => {
//         measureRef.current = element;
//         intersectionRef(element);
//       }}
//       className={inView ? 'section-visible' : 'section-hidden'}
//       $width='100%'
//       $maxWidth='100%'
//     >
//       <SectionHeadings
//         title='Where the work pays off'
//         subtitle='Projects'
//         subtitleTextColor='var(--clr-orange-400)'
//       />

//       <SectionContent componentToRender={<Projects />} />
//     </Section>
//   );
// }

// // SECTION4 TEST COMPONENTS
// function ContactTest({ measureRef, intersectionRef, inView }) {
//   return (
//     <Section
//       ref={(element) => {
//         measureRef.current = element;
//         intersectionRef(element);
//       }}
//       className={inView ? 'section-visible' : 'section-hidden'}
//       $width='100%'
//       $maxWidth='100%'
//     >
//       <SectionHeadings
//         title='Say hello'
//         subtitle='Contact'
//         subtitleTextColor='var(--clr-rose-400)'
//       />

//       <SectionContent componentToRender={<ContactForm />} />
//     </Section>
//   );
// }

// //

// function SectionContent({ componentToRender }) {
//   return <React.Fragment>{componentToRender}</React.Fragment>;
// }

// export default Test;
