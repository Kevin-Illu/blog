import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface WithTransitionProps {
  children: ReactNode;
  fadeIn?: boolean;
  fadeOut?: boolean;
}

export const Transition: FC<WithTransitionProps> = ({
  children,
  fadeIn,
  fadeOut,
}) => {
  return (
    <div className="transition">
      {children}
      {fadeIn && (
        <motion.div
          className="transition__slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}
      {fadeOut && (
        <motion.div
          className="transition__slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}
    </div>
  );
};
