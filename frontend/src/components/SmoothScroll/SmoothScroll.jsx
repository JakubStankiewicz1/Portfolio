import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {    // Initialize Lenis with custom settings for that "weird smooth" effect
    const lenis = new Lenis({
      duration: 1.8, // Longer duration for more dramatic smooth effect
      easing: (t) => {
        // Custom easing function for that "weird floating" feeling
        return t === 1 ? 1 : 1 - Math.pow(2, -12 * t);
      },
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, // Keep false for better mobile performance
      touchMultiplier: 1.5,
      infinite: false,
      normalizeWheel: true, // Better wheel normalization
      lerp: 0.08, // Lower lerp for more dramatic smooth effect (0.1 = default)
    });    lenisRef.current = lenis;

    // Make lenis globally available for ScrollToTop component
    window.lenis = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle resize events
    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener('resize', handleResize);

    // Prevent default scroll behavior on specific keys
    const handleKeyDown = (e) => {
      // Prevent space, page up/down, home, end from scrolling
      if ([32, 33, 34, 35, 36].includes(e.keyCode)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      window.lenis = null; // Clean up global reference
      lenis.destroy();
    };
  }, []);

  return children;
};

export default SmoothScroll;
