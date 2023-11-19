import { cubicBezier } from "framer-motion";

export const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const childVariants = {
  hidden: { y: 400 },
  show: {
    y: 0,
    transition: {
      ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
      duration: 1,
    },
  },
};
