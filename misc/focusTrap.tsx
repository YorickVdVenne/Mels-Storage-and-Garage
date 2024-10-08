'use client';

import { useEffect, useRef } from 'react';

export function useFocusTrap(
  isActive: boolean,
  handleClose: () => void,
  closeButtonRef: React.RefObject<HTMLElement>
) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current || !closeButtonRef.current) return;

    const focusableSelectors =
      'button, a:not(.skiplink), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements =
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors);
    const firstFocusableElement = closeButtonRef.current;
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
        return;
      }

      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);

    firstFocusableElement.focus();

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [isActive, handleClose, closeButtonRef]);

  return containerRef;
}
