import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for high-performance scroll reveal transitions using IntersectionObserver.
 * Strictly respects prefers-reduced-motion and gracefully falls back to visible if unsupported.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If reduced motion is preferred, immediately show without animation
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once !== false) {
          observer.disconnect();
        }
      } else if (options.once === false) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold ?? 0.05,
      rootMargin: options.rootMargin ?? '0px 0px -20px 0px',
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options.once, options.threshold, options.rootMargin]);

  return [ref, isVisible];
}
