import { useRef, useEffect } from 'react';

const finePointer = () =>
  window.matchMedia('(pointer: fine)').matches;
const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Magnetic pull: the element leans slightly toward the cursor while hovered,
 * then springs back on leave. Uses the independent `translate` property so it
 * composes with Tailwind's transform-based hover utilities instead of
 * clobbering them. No-op on touch devices and for reduced-motion users.
 */
export function useMagnetic(strength = 0.28) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer() || reducedMotion()) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transition = 'translate 0.12s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.translate = `${dx * strength}px ${dy * strength * 0.55}px`;
    };
    const leave = () => {
      el.style.transition = 'translate 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.translate = '0px 0px';
    };

    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [strength]);

  return ref;
}

/**
 * Perspective tilt: the element rotates a few degrees toward the cursor
 * position, snapping back smoothly on leave. No-op on touch and reduced motion.
 */
export function useTilt(maxDegrees = 6) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !finePointer() || reducedMotion()) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform 0.08s linear';
      el.style.transform = `perspective(900px) rotateY(${(px * maxDegrees).toFixed(2)}deg) rotateX(${(-py * maxDegrees).toFixed(2)}deg)`;
    };
    const leave = () => {
      el.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = '';
    };

    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, [maxDegrees]);

  return ref;
}
