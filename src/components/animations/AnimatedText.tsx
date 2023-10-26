import React, { FC, useRef } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  once?: boolean;
  fontFamily?: "font-sans" | "font-nunito" | "font-jetBrains";
  variants?: { [key: string]: any };
}

const deafultAnimations = {
  hidden: {
    y: 400,
  },
  visible: {
    y: 0,
    transition: {
      ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
      duration: 1,
    },
  },
};

export const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  className,
  fontFamily,
  as: Wrapper = "p",
  once,
  variants = {},
}) => {
  const textArray = Array.isArray(text) ? text : [text];
  const animationVariants =
    JSON.stringify(variants) === "{}" ? deafultAnimations : variants;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.1,
        }}
        aria-hidden
      >
        {textArray.map((line, i) => (
          <span className="block" key={i}>
            {line.split(" ").map((word, i) => (
              <span key={i} className="inline-block">
                {word.split("").map((char, i) => (
                  <motion.span
                    className={`${fontFamily} inline-block`}
                    key={i}
                    variants={animationVariants}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
