import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure page content is loaded
    const scrollToTopDelay = setTimeout(() => {
      // Try to use Lenis first (if available)
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          offset: 0,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3)
        });
      } else {
        // Fallback to native smooth scroll
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 50); // Small delay to ensure everything is mounted

    return () => clearTimeout(scrollToTopDelay);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
