/**
 * Smooth scroll utility with custom easing function
 * Provides smoother scrolling than default CSS smooth behavior
 */

type EasingFunction = (t: number) => number;

// Custom easing function for smooth, natural scrolling
const easeInOutCubic: EasingFunction = (t: number): number => {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Smoothly scroll to a target position with custom easing
 * @param targetY - Target scroll position
 * @param duration - Animation duration in milliseconds (default: 800)
 */
export const smoothScrollTo = (targetY: number, duration: number = 800): void => {
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetY - startY;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Smoothly scroll to an element by ID
 * @param elementId - ID of the element to scroll to
 * @param offset - Offset from the top in pixels (default: 80 for fixed nav)
 * @param duration - Animation duration in milliseconds (default: 800)
 */
export const smoothScrollToElement = (
  elementId: string,
  offset: number = 80,
  duration: number = 800
): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = elementPosition - offset;
  
  smoothScrollTo(targetPosition, duration);
};

/**
 * Instant scroll to top (for route navigation)
 */
export const instantScrollToTop = (): void => {
  const html = document.documentElement;
  const originalScrollBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  requestAnimationFrame(() => {
    html.style.scrollBehavior = originalScrollBehavior || '';
  });
};
