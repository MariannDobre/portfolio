import React from 'react';
import { Section } from '../../../interface/styledComponents';
import ContactHeader from './contactHeader';
import ContactForm from './contactForm';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const { ref: contactRef, inView: isSectionInView } = useInView({
    threshold: 0.1,
  });

  return (
    <Section
      ref={contactRef}
      className={isSectionInView ? 'visible' : 'hidden'}
    >
      <ContactHeader />

      <ContactForm />
    </Section>
  );
}

export default Contact;
