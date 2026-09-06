import { useCallback, useEffect, useRef } from 'react';

/**
 * JS-transform parallax for a full-bleed background layer.
 *
 * `background-attachment: fixed` is unreliable on iOS and Android, so the
 * layer is translated on scroll instead. At `depth = 1` the layer holds
 * completely still while the page scrolls, matching `fixed`; at `depth = 0`
 * it scrolls with the page.
 *
 * Attach the returned ref to an absolutely positioned child of a
 * `position: relative` section.
 */
export function useParallax(depth = 0.4) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);
  const travelRef = useRef<number | null>(null);
  const reducedRef = useRef(false);

  const tick = useCallback(() => {
    rafRef.current = 0;
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;

    if (depth <= 0 || reducedRef.current) {
      el.style.transform = 'translate3d(0,0,0)';
      return;
    }

    const rect = host.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    if (rect.bottom < -200 || rect.top > vh + 200) return;

    // Grow the layer by the distance it will travel so it never reveals an edge.
    const travel = ((vh + rect.height) / 2) * depth;
    if (travelRef.current !== travel) {
      travelRef.current = travel;
      el.style.top = `${-travel}px`;
      el.style.height = `${rect.height + travel * 2}px`;
    }

    const offset = vh / 2 - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(0,${(offset * depth).toFixed(2)}px,0)`;
  }, [depth]);

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('orientationchange', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('orientationchange', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  return ref;
}
