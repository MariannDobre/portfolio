import React, { useState } from 'react';
import { Box } from '../../../interface/styledComponents';
import ExperienceTabSelector from './experienceTabSelector';
import ExperienceTabContent from './experienceTabContent';

function ExperienceContainer() {
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <Box
      $alignItems='center'
      $justifyContent='center'
      $height='48rem'
    >
      <ExperienceTabSelector
        sectionIndex={sectionIndex}
        setSectionIndex={setSectionIndex}
      />

      <ExperienceTabContent sectionIndex={sectionIndex} />
    </Box>
  );
}

export default ExperienceContainer;
