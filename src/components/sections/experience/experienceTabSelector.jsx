import React from 'react';
import { Box, CustomButton } from '../../../interface/styledComponents';

const sectionsButtons = [
  { id: 1, label: 'course', value: 'course' },
  { id: 2, label: 'learning', value: 'learning' },
  // { id: 3, label: 'practice', value: 'practice' },
];

function ExperienceTabSelector({ sectionIndex, setSectionIndex }) {
  return (
    <Box
      style={{ alignSelf: 'flex-start' }}
      $direction='column'
      $width='20rem'
    >
      {sectionsButtons.map((button, index) => (
        <CustomButton
          style={{
            color: sectionIndex === index ? 'var(--clr-emerald-600)' : '',
            borderLeftColor:
              sectionIndex === index ? 'var(--clr-emerald-600)' : '',
          }}
          $display='flex'
          $alignItems='flex-start'
          $width='20rem'
          $borderLeft='0.2rem solid var(--clr-stone-400)'
          $t='1.6rem'
          $r='0'
          $b='1.6rem'
          $l='2rem'
          $hoverBgColor='rgba(5, 150, 105, 0.15)'
          key={button.id}
          value={button.value}
          onClick={() => {
            setSectionIndex(index);
          }}
        >
          {button.label}
        </CustomButton>
      ))}
    </Box>
  );
}

export default ExperienceTabSelector;
