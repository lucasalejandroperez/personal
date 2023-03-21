import { useEffect, useState } from 'react';

import { FaAngleUp } from 'react-icons/fa';

export const ScrollToTopButton = (): JSX.Element => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const changeScrollToTop = (): void => {
    if (window.scrollY > 400) {
      setShowScrollToTopButton(true);
    } else {
      setShowScrollToTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScrollToTop);

    return () => {
      window.removeEventListener('scroll', changeScrollToTop);
    };
  }, []);

  const goToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {showScrollToTopButton && (
        <FaAngleUp className="scroll-icon" onClick={goToTop} />
      )}{' '}
    </div>
  );
};
