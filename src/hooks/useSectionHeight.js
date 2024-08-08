import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useInView } from 'react-intersection-observer';

export function useSectionHeight({ optionalTabIndex }) {
  const measureRef = useRef();
  const { ref: intersectionRef, inView } = useInView();
  const [sectionHeight, setSectionHeight] = useState(0);

  const handleMeasure = useCallback(() => {
    if (measureRef?.current) {
      const newHeight = measureRef?.current?.clientHeight;
      setSectionHeight(newHeight);
    }
  }, []);

  useLayoutEffect(() => {
    handleMeasure();
  }, [handleMeasure, optionalTabIndex]);

  useEffect(() => {
    const handleResize = () => {
      handleMeasure();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMeasure]);

  return { measureRef, intersectionRef, inView, sectionHeight };
}
