import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  readonly threshold?: number;
  readonly rootMargin?: string;
  readonly triggerOnce?: boolean;
}

interface UseInViewReturn {
  readonly ref: React.RefObject<HTMLElement | null>;
  readonly isInView: boolean;
}

export function useInView(options: UseInViewOptions = {}): UseInViewReturn {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    if (!ref.current) return;

    const element = ref.current;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
