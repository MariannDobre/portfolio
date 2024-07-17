import React from 'react';
import {
  HeadingsContainer,
  SectionHeading,
  SectionSubheading,
} from '../../../interface/styledComponents';

function ContactHeader() {
  return (
    <HeadingsContainer
      $direction='column'
      $gap='0.8rem'
    >
      <SectionHeading>Say hello</SectionHeading>

      <SectionSubheading $textColor='var(--clr-rose-400)'>
        Contact
      </SectionSubheading>
    </HeadingsContainer>
  );
}

export default ContactHeader;
