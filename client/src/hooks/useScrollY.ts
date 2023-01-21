import { useState, useEffect } from 'react';

export const useScrollY = (): boolean => {
  const [isScrolledY, setIsScrolledY] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY !== 0) {
        setIsScrolledY(true);
      } else {
        setIsScrolledY(false);
      }
    };

    window.addEventListener('scroll', handleScrollY);
    return () => window.removeEventListener('scroll', handleScrollY);
  }, []);

  return isScrolledY;
};
