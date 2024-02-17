import { useEffect, useState } from 'react';

const widthMatching = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

interface useMediaQueryProps {
  /**
   * sm: 640,
   * md: 768,
   * lg: 1024,
   * xl: 1280,
   * '2xl': 1536,
   */
  width: keyof typeof widthMatching;
  direction?: 'min' | 'max';
}

export function useMediaQuery({
  width,
  direction = 'min',
}: useMediaQueryProps) {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (direction === 'min') {
        setIsMatch(window.innerWidth >= widthMatching[width]);
      } else if (direction === 'max') {
        setIsMatch(window.innerWidth < widthMatching[width]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, width]);

  return isMatch;
}
