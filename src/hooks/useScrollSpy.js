import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to track active section during scroll (ScrollSpy)
 * and provide smooth scroll navigation with sticky header offset.
 */
export const useScrollSpy = (sectionIds = [], offset = 135) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');
  const tocRef = useRef(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let currentId = sectionIds[0];

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            currentId = sectionIds[i];
          }
        }
      }

      // Check if user has scrolled near bottom of page
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);
      if (isAtBottom) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  // Keep active item visible inside the TOC sidebar container if it is scrolled
  useEffect(() => {
    if (tocRef.current && activeId) {
      const activeEl = tocRef.current.querySelector(`[data-section="${activeId}"]`);
      if (activeEl) {
        const container = tocRef.current;
        const elTop = activeEl.offsetTop;
        const elHeight = activeEl.offsetHeight;
        const containerScrollTop = container.scrollTop;
        const containerHeight = container.clientHeight;

        if (elTop < containerScrollTop || (elTop + elHeight) > (containerScrollTop + containerHeight)) {
          activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    }
  }, [activeId]);

  const scrollToSection = useCallback((e, id) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      isClickScrolling.current = true;
      setActiveId(id);

      const yOffset = -105; // 88px navbar + 17px breathing room
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      window.history.pushState(null, '', `#${id}`);

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  }, []);

  // Handle URL hash on initial load
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      if (sectionIds.includes(hashId)) {
        setTimeout(() => {
          scrollToSection(null, hashId);
        }, 150);
      }
    }
  }, [sectionIds, scrollToSection]);

  return { activeId, tocRef, scrollToSection };
};
