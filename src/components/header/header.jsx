import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Section } from '../../interface/styledComponents';
import HeaderTitles from './headerTitles';
import HeaderContent from './headerContent';

function Header() {
  const { ref: headerRef, inView: isSectionInView } = useInView({
    threshold: 0.1,
  });

  return (
    <Section
      ref={headerRef}
      className={isSectionInView ? 'visible' : 'hidden'}
      $marginBottom='20rem'
    >
      <HeaderTitles />

      <HeaderContent />
    </Section>
  );
}

export default Header;
