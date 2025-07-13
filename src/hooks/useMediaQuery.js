// File: src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to check if a CSS media query matches the current viewport.
 * @param {string} query - The media query string (e.g., '(min-width: 768px)').
 * @returns {boolean} - True if the media query matches, false otherwise.
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window.matchMedia is available (for SSR or older environments)
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Initial check
    setMatches(mediaQueryList.matches);

    // Listener function to update state on changes
    const listener = (event) => setMatches(event.matches);

    // Add event listener
    mediaQueryList.addEventListener('change', listener);

    // Clean up the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]); // Re-run effect if the query string changes

  return matches;
};

export default useMediaQuery;
