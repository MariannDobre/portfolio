import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function useSectionHeight({ optionalTabIndex }) {
  const measureRef = useRef();
  const { ref: intersectionRef, inView } = useInView();
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (measureRef?.current) {
      setSectionHeight(measureRef?.current?.clientHeight);
    }

    const handleResize = () => {
      if (measureRef?.current) {
        setSectionHeight(measureRef?.current?.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [optionalTabIndex]);

  return { measureRef, intersectionRef, inView, sectionHeight };
}
