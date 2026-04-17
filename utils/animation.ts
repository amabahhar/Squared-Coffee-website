import { Transition, Easing } from 'framer-motion';

export const SPRING_CONFIG_TEXT = {
  type: "spring",
  stiffness: 320,
  damping: 32,
  mass: 1.3,
} as Transition;

export const EASE_CUBIC_CONFIG = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1] as Easing,
} as Transition;
